import React from 'react';
import { Text, View, TouchableOpacity, ImageEditor } from 'react-native';
import { Camera, Permissions, MediaLibrary,ImagePicker } from 'expo';
import {Ionicons,Entypo} from '@expo/vector-icons'
import { Thumbnail } from 'native-base'

export default class CameraView extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    clickedPic: 'https://www.hertrack.com/wp-content/uploads/2018/10/no-image.jpg',
    selectedPic: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL).catch(console.error);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async takePhoto() {
    if(this.camera) {
      let photo = await this.camera.takePictureAsync()
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      this.setState({clickedPic: photo.uri})
    }
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
      (uri) => this.setState(() => ({ selectedPic: uri})),
      () => console.log('Error'))
    })
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
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ ref => this.camera = ref}
            >
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
             <Ionicons name="ios-reverse-camera" size={50} color={'#fff'}/>
           </TouchableOpacity>

           <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
             <Entypo onPress={() => this.takePhoto()} name="circle" size={80} color={'#fff'}/>
           </TouchableOpacity>

           <TouchableOpacity
               onPress={this.pickImage}
               style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <Thumbnail
                source={{uri: this.state.clickedPic}}
                />
           </TouchableOpacity>
          </View>

            </View>
          </Camera>
        </View>
      );
    }
  }
}