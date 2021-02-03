import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

const FrontCam = () => {
  const [test_image, setTestImage] = useState(null);

  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고

  const takePhoto = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('data', data.uri);

      let image = data.uri;

      setTestImage(image);
    }
  };

  return (
    <>
      <SafeAreaView>
        <RNCamera
          ref={cameraRef}
          style={{width: 300, height: 300}}
          type={RNCamera.Constants.Type.front}
          captureAudio={false}
        />
        <Button
          style={{top: 500}}
          onPress={takePhoto}
          title="카메라 캡쳐"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Image style={{width: 300, height: 300}} source={{uri: test_image}} />
      </SafeAreaView>
    </>
  );
};

export default FrontCam;
