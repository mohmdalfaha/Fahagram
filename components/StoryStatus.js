import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class StoryList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}/>
        <Text style={styles.handle}>Mohmd Alfaha</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginLeft:15,
    paddingTop:5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
    box: {
    width: 54,
    height:54,
    backgroundColor: 'rgb(200,109,215)',
    borderColor:'black',
    borderRadius:39,
  },
  handle: {
    textAlign: 'center',
    fontSize: 6,
    paddingTop:8,
    color:'black',
  }
});
