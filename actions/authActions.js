import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { FETCH_USER } from './types';

export const fetchUserProfile = () => dispatch => {
    
  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref('/users/' + userId)
    .once('value')
    .then(function(snapshot) {
      const email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
      const role = (snapshot.val() && snapshot.val().role) || 'user';

      dispatch({ type: FETCH_USER, payload: { email, role } });
    });

};
