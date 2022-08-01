import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "./firebase";
export const storage = getStorage(app);

export async function uploadImage(image) {
  try {
    const img = await fetch(image.uri);
    const byte = await img.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    const imageRef = ref(storage, filename);

    await uploadBytes(imageRef, byte);
    const url = await getDownloadURL(imageRef);

    // send to backend
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    };
    const response = await fetch(
      "https://f99d-41-113-245-156.in.ngrok.io/imageai",
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
