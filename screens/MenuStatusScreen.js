import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import AppHeader from '../components/header/AppHeader';

class MenuStatusScreen extends Component {
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

  render() {
    return (
      <ScrollView>
          <Text>MenuStatus</Text>
          <Text>MenuStatus</Text>
          <Text>MenuStatus</Text>
          <Text>MenuStatus</Text>
      </ScrollView>
    );
  }
}

export default MenuStatusScreen;
