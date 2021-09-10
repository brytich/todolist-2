import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './navigation/dashboard';
import Homepage from './navigation/homepage';
import apiKeys from './config/keys';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true,
//isAuthenticated est false par defaut       
      isAuthenticationReady: false,
      isAuthenticated: false
    }
// initialisation de l app avec l auth firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(apiKeys.firebaseConfig)
      firebase.auth().onAuthStateChanged((user) => {
// une fois l'auth validé elle devient true      
        this.setState({isAuthenticationReady: true})
        this.setState({isAuthenticated: !! user}) 
      })
    }

  }
  render() {
    return (
      <View style={styles.container}>
        {(this.state.isAuthenticated) ? <Dashboard/> : <Homepage/> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
