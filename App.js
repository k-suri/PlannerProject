import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Venue from "./screens/Venue";
import Invitations from "./screens/Invitations";
import TodoList from "./screens/TodoList";
import GuestList from "./screens/GuestList";
import Playlist from "./screens/Playlist";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Image } from "react-native";
import { colors } from "./utils/Colors";
import { PlannerProvider } from "./contexts/PlannerContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    "Pacifico": require("./assets/fonts/Pacifico-Regular.ttf"),
    "Sacramento-Regular": require("./assets/fonts/Sacramento-Regular.ttf"),
    "Sofia-Regular": require("./assets/fonts/Sofia-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="auto" />
      <PlannerProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            title: "EventBuddy",
            headerTitleStyle:{
              color:colors.action200,
              fontFamily:"Pacifico"
            }
          })}
        >
          <Stack.Screen name="Home Screen" component={Home}></Stack.Screen>
          <Stack.Screen name="Venue Screen" component={Venue}></Stack.Screen>
          <Stack.Screen
            name="Invitation Screen"
            component={Invitations}
          ></Stack.Screen>
          <Stack.Screen
            name="Todo List Screen"
            component={TodoList}
          ></Stack.Screen>
          <Stack.Screen
            name="Guest List Screen"
            component={GuestList}
          ></Stack.Screen>
          <Stack.Screen
            name="Playlist Screen"
            component={Playlist}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </PlannerProvider>
    </>
  );
}
