import React from 'react';
import {Platform, Icon, Constants,LinearGradient } from 'expo';
import {View,StyleSheet} from 'react-native'

import Colors from '../constants/Colors';

export default class CameraBtnIcon extends React.Component {
  render() {
      return(
      <View >
          <LinearGradient style={styles.cameraBtnBackground}
            colors = {['rgb(48,35,174)','rgb(200,109,215)']}
            >
            <Icon.Ionicons
                name={'md-camera'}
                color={Colors.tabBar}
                size={20}
                style={styles.cameraBtn}/>

           </LinearGradient>
       </View>
        )
    }
  }


const styles = StyleSheet.create({
  cameraBtnBackground:{
    width: 47,
    height:32,
    borderColor:'black',
    borderTopRightRadius:16,
    borderBottomRightRadius:16,
    paddingTop:6,
    paddingBottom:10
},
cameraBtn: {
    paddingLeft:15
}
})

