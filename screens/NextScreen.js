import { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MyImageContext } from "../context/ImageContext";

export default function NextScreen() {
  const { loading, newImage } = useContext(MyImageContext);
  console.log(newImage);
  return (
    <>
      <View style={styles.container}>
        {loading && <Text>Loading</Text>}
        {newImage && (
          <Image
            source={{ uri: newImage.url }}
            style={{
              width: 300,
              height: 500,
            }}
          />
        )}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0072E4",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#fff" }}>Remove Background</Text>
      </TouchableOpacity>
    </>
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
