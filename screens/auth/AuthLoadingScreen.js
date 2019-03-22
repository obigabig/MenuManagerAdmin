import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  YellowBox
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ignoreWarnings from 'react-native-ignore-warnings';



class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    ignoreWarnings('Setting a timer');
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    //await firebase.auth().signOut();
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        //Fetch user profile.
        this.props.fetchUserProfile();
      } else {
        // User is signed out.
        // ...
      }
      this.props.navigation.navigate(user ? 'Main' : 'Auth');
    });
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(null, actions)(AuthLoadingScreen);
