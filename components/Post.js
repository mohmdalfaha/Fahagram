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
          style = {{width:35,height:35,borderRadius:50}}
          >
      <View style={styles.box}>

      </View>
      </LinearGradient>
          <View style={styles.titlesContainers}>
            <Text style={styles.handle}>{props.post.author}</Text>
            <Text style={styles.location}>{props.post.location}</Text>

          </View>
        </View>
        <PinchZoomView >
      {props.post.imageURL == null
        ? (<View style={styles.picContainer}/>)
        : (<Image style={styles.picContainer} source={{uri: props.post.imageURL}}/>)}
        </PinchZoomView>
      <TimeAgo time={'2019-04-06T00:17:44.124Z'}/>
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 15,
  },
    box: {
    width: 35,
    height:35,
    borderColor:'black',
    borderRadius:39,
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
  ago: {
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignContent:'flex-end',
    fontSize: 8,
    color:'gray',
  },
  picContainer:{
    flex:1,
    width:375,
    height:201,
    backgroundColor:'gray',
  }
});
