import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import AppHeader from '../../components/header/AppHeader';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

import { ErrorText } from '../../components/StyledText';

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <AppHeader
          title={__DEV__ ? 'MENU MANAGER (Dev Mode)' : 'MENU MANAGER'}
          navigationProps={navigation}
        />
      )
    };
  };

  state = {
    error: null,
    loading: false
  };

  componentDidMount() {}

  onLogOutSuccess() {
    this.setState({
      error: '', loading: false
    })
  }

  onLogOutFailure(errorMessage) {   
    this.setState({ 
      error: errorMessage , 
      loading: false}
    ) 
  }
  _onSignOutPress = () => {

    this.setState({ error: '', loading: true });
    
    firebase
      .auth()
      .signOut()
      .then(
        // Sign-out successful.
        this.onLogOutSuccess.bind(this)
      )
      .catch(function(errorMessage) {
        // An error happened.
        this.onLogOutFailure.bind(this)(errorMessage);
      });
  };

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size={'small'} />;
    }
    return (
      <Button title="Sign out" type="solid" onPress={this._onSignOutPress} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>email: {this.props.userProfile.email}</Text>
          <Text>role: {this.props.userProfile.role}</Text>
        </View>
        <ErrorText>{this.state.error}</ErrorText>
        {this.renderButton()}
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 5
  }
});

function mapStateToProps({ user }) {
  return { userProfile: user.userProfile };
}

export default connect(mapStateToProps)(ProfileScreen);
