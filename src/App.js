import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyB76P-YK08l8_seL7bWdw5H4JU18hA7kv4',
        authDomain: 'auth-463fc.firebaseapp.com',
        databaseURL: 'https://auth-463fc.firebaseio.com',
        projectId: 'auth-463fc',
        storageBucket: 'auth-463fc.appspot.com',
        messagingSenderId: '762726859341'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button>Log Out</Button>
          </CardSection>
        ); 

      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  
  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
    );
  }
}

export default App;
