import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraView extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
          <View style={{
              position: 'absolute',
              height: 100,
              width: '100%',
              borderWidth: 1,
              bottom: 0,
              borderColor: '#fff',
              flexDirection: 'row',
           }}>

           <TouchableOpacity
              style={{flex:1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                      });
                    }}>
             <Text>Switch Cam</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
             <Text>Switch Cam</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
             <Text>Switch Cam</Text>
           </TouchableOpacity>

          </View>

            </View>
          </Camera>
        </View>
      );
    }
  }
}