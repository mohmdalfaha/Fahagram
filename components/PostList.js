import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Post from './Post'

export default class PostList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView vertical={true}>
          <Post image={this.props.image}/>
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
