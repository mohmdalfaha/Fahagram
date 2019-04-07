import React from 'react';
import { ScrollView, StyleSheet,View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {MaterialIcons} from '@expo/vector-icons'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View style={styles.container}>
      <MaterialIcons name="person" size={100}/>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 140,
    backgroundColor: '#fff',
  },
});
