import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import NextScreen from "./screens/NextScreen";
import ImageContext from "./context/ImageContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <ImageContext>
        <Stack.Navigator>
          <Stack.Screen
            name='Main'
            component={Main}
            options={{ title: "Removy" }}
          />
          <Stack.Screen
            name='Download'
            component={NextScreen}
            options={{ title: "Download" }}
          />
        </Stack.Navigator>
      </ImageContext>
    </NavigationContainer>
  );
}
