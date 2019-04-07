import React from 'react';
import { ScrollView, StyleSheet, Text,View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {FontAwesome} from '@expo/vector-icons'

export default class LikesScreen extends React.Component {
  static navigationOptions = {
    title: 'Likes',
  };

  render() {
    return (
      <View style={styles.container}>
        <FontAwesome name="heart-o" size={100}/>
        <Text>Likes Screen</Text>
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
