import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Constants,LinearGradient} from 'expo';

function StoryStatus(props){
  const { avatarURL, name} = props.user
    return (
      <View style={styles.container}>
        <LinearGradient
          colors = {['rgb(48,35,174)','rgb(200,109,215)']}
          style = {styles.gradientBackGround}
          >
      <Image
        style={styles.box}
        source={{uri: avatarURL}}
        />
      </LinearGradient>
        <Text style={styles.handle}>{name}</Text>
      </View>
  );
}

export default StoryStatus


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginLeft:15,
    paddingTop:10,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  gradientBackGround: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    width:54,
    height:54,
    borderRadius:50,
    paddingLeft:2,
  },
    box: {
    width: 50,
    height:50,
    borderColor:'black',
    borderRadius:39,
    paddingTop:5,
    backgroundColor:'#fff'
  },
  handle: {
    textAlign: 'center',
    fontSize: 6,
    paddingTop:4,
    color:'black',
  }
});
