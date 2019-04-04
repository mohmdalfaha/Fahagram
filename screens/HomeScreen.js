import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageEditor
} from 'react-native';
import {ImagePicker, Icon,Constants,LinearGradient} from 'expo';
import Colors from '../constants/Colors';

import StoryList from '../components/StoryList'
import PostList from '../components/PostList'
import CameraBtnIcon from '../components/CameraBtn'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state={
    image: null,
  }

  pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowEditing: true,
      aspect: [2,1]
    }).then((result) =>{
      if(result.cancelled) {
        return
      }

      ImageEditor.cropImage(result.uri,{
        offset: { x:0, y:0},
        size: { width: result.width, height: result.height},
        displaySize: { width: 375, height:201 },
        resizeMode: 'contain',
      },
      (uri) => this.setState(() => ({ image: uri})),
      () => console.log('Error'))
    })
  }

  render() {
    return (
   <View style={styles.container}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={this.pickImage}>
        <CameraBtnIcon />
      </TouchableOpacity>
        <Text style={styles.headerTitle}>Fahagram</Text>
      </View>
         <StoryList style={{flex:1}}/>
         <PostList image={this.state.image} style={{flex:1}}/>
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
    paddingTop:25
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf:'center',
    paddingLeft:45,
  },
  cameraBtnBackground:{
    width: 47,
    height:32,
    borderColor:'black',
    borderTopRightRadius:16,
    borderBottomRightRadius:16,
    paddingTop:20
}
});
