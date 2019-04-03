import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import StoryStatus from './StoryStatus'

export default class StoryList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <StoryStatus/>
        <StoryStatus/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingBottom:20,
    borderBottomWidth:0.9,
    borderBottomColor:'rgb(227,225,225)'
  },
});
