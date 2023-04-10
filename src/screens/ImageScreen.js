import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { useState } from "react";
import Constants from "expo-constants";
import { CustomCamera } from "../components/CustomCamera";

const ImageScreen = () => {
  const [image, setImage] = useState(null);

  const _handleGalleryPress = async () => {
    try {
      // No permissions request is necessary for launching the image library
      let result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
      });

      console.log(result);

      if (result.canceled) {
        console.warn("CANCELADO");
        return;
      }

      setImage(result.assets[0].uri);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>ImageScreen</Text>
      <ScrollView>
        <View>
          <Button
            title="Elegir desde la galería"
            onPress={_handleGalleryPress}
          />
          {image !== null ? (
            <Image source={{ uri: image }} style={styles.box} />
          ) : (
            <View style={[styles.box, { backgroundColor: "grey" }]} />
          )}
        </View>
        <View
          style={{ marginVertical: 10, height: 15, backgroundColor: "blue" }}
        />
        <CustomCamera />
      </ScrollView>
    </SafeAreaView>
  );
};

export { ImageScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 200,
  },
});
