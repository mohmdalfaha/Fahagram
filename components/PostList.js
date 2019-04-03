import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import Post from './Post'

export default class PostList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView vertical={true}>
          <Post/>
          <Post/>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});
