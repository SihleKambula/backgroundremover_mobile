import { useContext } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { MyImageContext } from "../context/ImageContext";

export default function NextScreen() {
  const { loading, newImage } = useContext(MyImageContext);
  console.log(newImage);
  return (
    <View style={styles.container}>
      {loading && <Text>Loading</Text>}
      {newImage && (
        <Image
          source={{ uri: newImage.url }}
          style={{
            width: newImage.preview_width,
            height: newImage.preview_height,
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    height: 500,
    width: 300,
    borderRadius: 20,
  },
});
