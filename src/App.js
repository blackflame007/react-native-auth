import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyB76P-YK08l8_seL7bWdw5H4JU18hA7kv4',
        authDomain: 'auth-463fc.firebaseapp.com',
        databaseURL: 'https://auth-463fc.firebaseio.com',
        projectId: 'auth-463fc',
        storageBucket: 'auth-463fc.appspot.com',
        messagingSenderId: '762726859341'
    });
  }
  
  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          <Text>An app</Text>
        </View>
    );
  }
}

export default App;
