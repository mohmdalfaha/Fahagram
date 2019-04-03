import React from 'react';
import { Icon, Constants,LinearGradient } from 'expo';
import {StyleSheet} from 'react-native'

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    if(this.props.focused){
      return(
        <LinearGradient
                colors = {['rgb(48,35,174)','rgb(200,109,215)']}
                style = {{width:45,height:45,borderRadius:50}}
                >
              <Icon.Ionicons
                name={this.props.name}
                size={30}
                color={Colors.tabIconDefault}
                style={styles.tabBarIcon}

              />
            </LinearGradient>
        )
    }
    return (
      <Icon.Ionicons
                name={this.props.name}
                size={30}
                color={Colors.tabIconDefault}
                style={styles.tabBarIcon}
              />

    );
  }
}

const styles = StyleSheet.create({
  tabBarIcon:{
    alignSelf:'center',
    paddingTop:5,
    paddingRight:2,
  }
})

