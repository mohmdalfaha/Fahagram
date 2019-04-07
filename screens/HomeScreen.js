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
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import StoryList from '../components/StoryList'
import PostList from '../components/PostList'
import CameraBtnIcon from '../components/CameraBtn'

const client = new ApolloClient({
  uri: 'https://fahagram.herokuapp.com/v1alpha1/graphql',
})

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state={
    image: null,
  }

  render() {
    return (
  <ApolloProvider client={client}>
   <View style={styles.container}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate(
        'CameraView'
        )}>
        <CameraBtnIcon />
      </TouchableOpacity>
        <Text style={styles.headerTitle}>Fahagram</Text>
      </View>
         <StoryList style={{flex:1}}/>
         <PostList  style={{flex:1}}/>
    </ScrollView>
  </View>
  </ApolloProvider>
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
