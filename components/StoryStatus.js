import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Constants,LinearGradient} from 'expo';

export default class StoryList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors = {['rgb(48,35,174)','rgb(200,109,215)']}
          style = {{width:54,height:54,borderRadius:50}}
          >
      <View style={styles.box}>
        </View>
      </LinearGradient>
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
    width: 50,
    height:50,
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
