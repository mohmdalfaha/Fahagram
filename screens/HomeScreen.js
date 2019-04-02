import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import StoryList from '../components/StoryList'
import PostList from '../components/PostList'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
   <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.cameraBtn}/>
          <Text style={styles.headerTitle}> Fahagram </Text>
        </View>
           <StoryList style={{flex:1}}/>
           <PostList style={{flex:1}}/>
      </ScrollView>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection:'row',
    paddingTop:25,
    paddingBottom:6,
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft:40,
  },
  cameraBtn:{
    width: 47,
    height:32,
    backgroundColor: 'rgb(200,109,215)',
    borderColor:'black',
    borderTopRightRadius:16,
    borderBottomRightRadius:16,
  }
});
