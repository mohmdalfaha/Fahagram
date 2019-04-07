import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions  } from 'react-native';
import {Constants,LinearGradient} from 'expo';
import TimeAgo from 'react-native-timeago';
import PinchZoomView from 'react-native-pinch-zoom-view';

const Post = (props) => (
      <View style={styles.postcontainer}>
        <View style={styles.postHeader}>
        <LinearGradient
          colors = {['rgb(48,35,174)','rgb(200,109,215)']}
          style = {styles.gradientBackground}
          >
      <Image
      source={{uri: props.post.avatarURL}}
      style={styles.box}/>

      </LinearGradient>
          <View style={styles.titlesContainers}>
            <Text style={styles.handle}>{props.post.author}</Text>
            <Text style={styles.location}>{props.post.location}</Text>
          </View>
            <TimeAgo style={styles.timeAgo}time={props.post.time}/>
        </View>
        <PinchZoomView >
      {props.post.imageURL == null
        ? (<View style={styles.picContainer}/>)
        : (<Image style={styles.picContainer} source={{uri: props.post.imageURL}}/>)}
        </PinchZoomView>
      </View>
    );

export default Post

const styles = StyleSheet.create({
  postcontainer: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  postHeader: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 15,
  },
  gradientBackground: {
    alignSelf: 'flex-start',
    justifyContent:'center',
    alignContent: 'center',
    width:35,
    height:35,
    borderRadius:50
  },
    box: {
    alignSelf: 'center',
    width: 31,
    height:31,
    borderColor:'black',
    borderRadius:39,
    backgroundColor:'#fff',
  },
  titlesContainers: {
    flexDirection: 'column',
    justifyContent:'center',
    alignContent:'center',
    textAlign:'left',
    marginLeft:5,
  },
  handle: {
    textAlign: 'justify',
    fontSize: 11,
    color:'black',
  },
  location: {
    textAlign: 'justify',
    fontSize: 8,
    color:'gray',
  },
  timeAgo: {
    alignSelf:'center',
    paddingTop:25,
    paddingLeft:290,
    fontSize: 9,
    color:'gray',
    position:'absolute',
  },
  picContainer:{
    flex:1,
    width:375,
    height:201,
    backgroundColor:'gray',
  }
});
