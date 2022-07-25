import { createContext, useState } from "react";
import { uploadImage } from "../firebase/storage";

export const MyImageContext = createContext();

export default function ImageContext({ children }) {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const processImageBGRemove = async () => {
    setLoading(true);
    const data = await uploadImage(image);
    setNewImage(data);
    setLoading(false);
  };
  return (
    <MyImageContext.Provider
      value={{ image, setImage, processImageBGRemove, newImage, loading }}
    >
      {children}
    </MyImageContext.Provider>
  );
}
