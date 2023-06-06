import { StyleSheet, Text, View, Image   } from "react-native";

const IaImageMessage = ({ messageimageUri }) => (
  <View
    style={{
      backgroundColor: "#F2F4F5",
      padding: 18,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      borderTopRightRadius: 24,
      justifyContent: "flex-start", // Alineación en el eje principal
      alignSelf: "flex-start", // Alineación en el eje secundario

    }}
  >
     <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: messageimageUri }}
        />
    
  </View>
);

export { IaImageMessage };

const styles = StyleSheet.create({});
