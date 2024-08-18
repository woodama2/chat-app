import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// Import React Native
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

// Import the screens we want to navigate
import Start from './components/Start';
import Chat from './components/Chat';

// Import screen navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Firebase
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Create the navigator
const Stack = createNativeStackNavigator();

// The app's main Chat component that renders the chat UI
const App = () => {
  const connectionStatus = useNetInfo();

  const firebaseConfig = {
    apiKey: 'AIzaSyBhvN4Tuibqsdw7sx7BfbUai_IT4cUh6qs',
    authDomain: 'chat-app-91765.firebaseapp.com',
    projectId: 'chat-app-91765',
    storageBucket: 'chat-app-91765.appspot.com',
    messagingSenderId: '722667528314',
    appId: '1:722667528314:web:5212aa366658da30a21bc3',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  // Initialize Firebase Storage handler
  const storage = getStorage(app);

  // Connection status monitoring.  If commection is lost, an error will appear saying "Connection lost!"
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('Connection lost!');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    // Navigator Container to wrap all content and support site navigation
    <NavigationContainer>
      {/* Default screen is Start */}
      <Stack.Navigator initialRouteName="Start">
        {/* Add the Screen components to the Navigator */}
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {/* Pass Firebase db object to chat screen */}
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
