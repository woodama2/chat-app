# meet app

### Objective

To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

### Context

More and more people use their phones for daily tasks, such as shopping, creating to-do lists, communicating with friends, scheduling meetings, and more. That's why many companies offer native mobile versions of their web apps, or even skip creating a web app entirely.

In the past, building high-quality mobile apps required a lot of time and money because writing apps for different platforms like iOS and Android required specialized programmers who could build and maintain multiple codebases.

Over time, however, new technologies emerged that made it easier for companies to build and maintain mobile applications using familiar syntax. One of these technologies is React Native, a framework for building Android and iOS apps that only requires one codebase.

For this Achievement’s project, you’ll use React Native, Expo, and Google Firestore Database to build a chat app that you can add to your portfolio and demonstrate your knowledge of JavaScript mobile development.

### The 5 Ws

1. Who—The users of the mobile chat app. These could be friends, family or other
students on this course. Your codebase will be used by other developers working on
the product.
2. What—A native chat app built with React Native, as well as all the relevant
documentation.
3. When—Whenever users of your chat app want to communicate with each other.
4. Where—The app will be optimized for both Android and iOS devices. You will use
Expo to develop the app and Google Firestore to store the chat messages.
5. Why—Mobile chat apps are among the most commonly downloaded and used apps
in the world, so knowing how to build a chat app is an indisp

### User Stories

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

### Key Features

- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending images and location data.
- Data gets stored online and offline.

### Technical Requirements

- The app must be written in React Native.
- The app must be developed using Expo.
- The app must be styled according to the given screen design.
- Chat conversations must be stored in Google Firestore Database.
- The app must authenticate users anonymously via Google Firebase authentication.
- Chat conversations must be stored locally.
- The app must let users pick and send images from the phone’s image library.
- The app must let users take pictures with the device’s camera app, and send them.
- The app must store images in Firebase Cloud Storage.
- The app must be able to read the user’s location data.
- Location data must be sent via the chat in a map view.
- The chat interface and functionality must be created using the Gifted Chat library.
- The app’s codebase must contain comments.

### Design Specifications

- Vertical and horizontal spacing: evenly distributed.
- App title: font size 45, font weight 600, font color #FFFFFF
- “Your name”: font size 16, font weight 300, font color #757083, 50% opacity
- “Choose background color”: font size 16, font weight 300, font color #757083, 100% opacity
- Color options HEX codes: #090C08; #474056; #8A95A5; #B9C6AE
- Start chatting button: font size 16, font weight 600, font color #FFFFFF, button color #757083

## App Set Up

### Dependencies
- React Native
- React Native Maps: Ability to display a device's location
- Expo: Development framework for React Native
- Expo Location: Ability to access a device's location
- Expo Image Picker: Allows for access to and usage of device's media library and camera
- React Navigation: Navigation library
- Gifted Chat: React Native library specifically created for developing chat apps
- Firebase: Google's platform to support data storage, auth, etc.
- Firebase - Firestore Database: Google's database storage for messages
- Firebase - Auth: Google's Authentication tool
- Firebase - Storage: Google's database storage for images/videos
- React Native AsyncStorage: Allows for app usage when offline

### Installation
1. Clone the repository: 
```
git clone https://github.com/woodama2/chat-app
```
*or*
1-b. Start from scratch
```
npx create-expo-app chat-app --template
```

2. Install Node.js, nvm, and npm to a suitable version
```
nvm install 16.19.0
nvm use 16.19.0
nvm alias default 16.19.0
```

3. Install expo-cli
```
npm install -g expo-cli
```

4. Install dependencies: (see list above for descriptions)


5. Set up and configure Firebase: 
- Create an account
- Start a new project
- Set up the database Build -> Firestore Database
- Activate storage
- Change rules from: "allow read, write: if false" to "allow read, write: if true"

6. Add Firestore configuration to your project
- Register your app
- Add the environmental variables provided by Firestore to your App.js file

6. Start the Expo development server: npx expo start

### Testing
Running on an Emulator
1. Ensure you have an Android Emulator or iOS Simulator running
2. Press "a" (for Android) or "i" (for iOS) in the Expo CLI Metro to launch the app within the emulator/simulator

Running on a Physical Device
1. Install and log into the Expo Go app from the Apple App or Google Play Stores
2. Scan the QR code generated after running "npx expo start", which starts the metro in the Terminal