import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

const Chat = ({ route, navigation }) => {
  const { name, background } = route.params;
  const [messages, setMessages] = useState([]);

  // Effect hook to set navigation title
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  // Effect hook for messages
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello, developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'You have now entered the chat',
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  // Function to handle sending messages
  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  // Function to handle chat bubble styling
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000',
          },
          left: {
            backgroundColor: '#FFF',
          },
        }}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
      />
      {/* Fixes a device-specific blocked keyboard problem */}
      {Platform.OS === 'android' ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
