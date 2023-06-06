import { StyleSheet, Text, View, Image  } from "react-native";

const UserImageMessage = ({ messageimageUri }) => (
  <View
    style={{
      backgroundColor: "#0070F0",
      padding: 18,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      borderBottomLeftRadius: 24,
      justifyContent: "flex-end", // Alineación en el eje principal
      alignSelf: "flex-end", // Alineación en el eje secundario
    }}
  >
    <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: messageimageUri }}
        />
    
  </View>
);

export { UserImageMessage };

const styles = StyleSheet.create({});
