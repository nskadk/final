import { View, Text, SafeAreaView,TouchableWithoutFeedback, Image, Button } from 'react-native'
import React,{ useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function ScanScreen() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission]= useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission]= useState();
  const[photo, setPhoto] =useState();
  const homepage = useNavigation();
  const userpage = useNavigation();
  const scanpage = useNavigation();

  useEffect(()=> {
    (async ()=>{
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  },[]);

  if (hasCameraPermission=== undefined){
    return <Text>Requesting permission...</Text>
  } else if (!hasCameraPermission){
    return <Text>Permission for camera not granetd. Please change this</Text>
  }

  let takePic =async ()=> {
    let options={
      quality: 1,
      base64: true,
      exif: false
    };
    let newPhoto =await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo){
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
  

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return(
        <SafeAreaView style={{flex: 1, alignItems:'center', justfyContent: 'center'}}>
          <Image style={{alignSelf: 'stretch',flex: 1}} source={{uri: "data:image/jpg;base64," + photo.base64}}/>
          <Button title="Share" onPress={sharePic} />
          {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        </SafeAreaView>
    );
  }


  return (
    <SafeAreaView>
      <Camera style={{flex: 1, alignItems:'center', justfyContent: 'center'}}  ref={cameraRef}>
        <View style={{backgroundColor: 'grey', alignSelf: 'flex-end'}}>
          <Button title="Take pic" onPress={takePic}/>
        </View>
      </Camera>
    
                {/* EndBar */}
          <View style={{position: 'absolute', top: 830, width: '100%'}}>
            <View style={{backgroundColor: 'white', flexDirection:"row",justifyContent:"space-between", paddingTop: 15,paddingBottom: 17, paddingRight: 40, paddingLeft: 40}}>
                <TouchableWithoutFeedback onPress={()=> homepage.navigate('Home')}>
                  <Icon.Home strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                </TouchableWithoutFeedback>
                <Icon.MapPin strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                <TouchableWithoutFeedback onPress={()=> scanpage.navigate('Scan')}>
                    <View style={{borderRadius:50, padding: 20, backgroundColor:'green', bottom: 30 }}>
                        <Image style={{width: 30, height: 30}} source={require('../assets/images/scanning.png')}/>
                    </View>
                </TouchableWithoutFeedback>
                <Icon.Award strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                <TouchableWithoutFeedback onPress={()=> userpage.navigate('User')}>    
                    <Icon.User strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    </SafeAreaView>
  )
}