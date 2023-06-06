import { useNavigation, useRoute } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { manipulateAsync } from "expo-image-manipulator";
import { ROUTES } from "../navigation/routes";

const CustomCamera = () => {
  const navigation = useNavigation();
  const camera = useRef(null);
  const params = useRoute().params;
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return null;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Necesitamos el acceso a la cámara
        </Text>
        <Button onPress={requestPermission} title="Permitir" />
      </View>
    );
  }

  function toggleCameraType() {
    const newType =
      type === CameraType.back ? CameraType.front : CameraType.back;
    setType(newType);
  }

  const takePicture = async () => {
    if (camera.current) {
      const data = await camera.current.takePictureAsync();
      const resized = await manipulateAsync(data.uri, [
        { resize: { height: 100 } },
      ]);
      setImage(resized.uri);
      params?.addMessage(resized.uri);
      navigation.goBack();
    } else {
      console.warn("Cámara no lista");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: "#F2F4F5",
          padding: 18,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        <Camera ref={camera} style={styles.box} type={type} ratio="1:1" />
        <Button title="Cambiar cámara" onPress={toggleCameraType} />
        <Button title="Tomar Foto" onPress={takePicture} />
        {image !== null ? (
          <Image source={{ uri: image }} style={styles.box} />
        ) : (
          <View style={[styles.box, { backgroundColor: "grey" }]} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  box: {
    width: 200,
    height: 200,
  },
});

export { CustomCamera };
