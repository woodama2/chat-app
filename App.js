import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Import the screens we want to navigate
import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Create the navigator
const Stack = createNativeStackNavigator();

// The app's main Chat component that renders the chat UI
const App = () => {
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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        {/* Add the Screen components to the Navigator */}
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
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
