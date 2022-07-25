import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MyImageContext } from "../context/ImageContext";

export default function Main({ navigation }) {
  const { image, setImage, processImageBGRemove } = useContext(MyImageContext);

  const getImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
    });
    setImage(result);
  };

  const processImage = async () => {
    if (!image) return null;
    navigation.navigate("Download");
    processImageBGRemove();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={getImage}>
        <View style={styles.imageContainer}>
          {!image && <Text>Tap to add image</Text>}
          {image && <Image source={{ uri: image.uri }} style={styles.image} />}
        </View>
      </Pressable>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#fff" }}>Remove Background</Text>
      </TouchableOpacity>
    </View>
  );
}

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    width: 300,
    marginVertical: 40,
    borderRadius: 20,
    borderColor: "blue",
    borderStyle: "dashed",
    borderWidth: 2,
  },
  image: {
    height: 500,
    width: 300,
    borderRadius: 20,
  },
});
