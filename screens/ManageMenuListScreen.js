import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import AppHeader from '../components/header/AppHeader';

class ManageMenuListScreen extends Component {
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
          <Text>ManageMenuListScreen</Text>
          <Text>ManageMenuListScreen</Text>
          <Text>ManageMenuListScreen</Text>
          <Text>ManageMenuListScreen99</Text>
      </ScrollView>
    );
  }
}

export default ManageMenuListScreen;
