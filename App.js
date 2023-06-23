import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Invitations from "./screens/Invitations";
import TodoList from "./screens/TodoList";
import GuestList from "./screens/GuestList";
import Playlist from "./screens/Playlist";
import PlaylistDetails from "./screens/PlaylistDetails";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { colors } from "./utils/Colors";
import { PlannerProvider } from "./contexts/PlannerContext";
import Invite from "./components/Invite";
import Invite2 from "./components/Invite2";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Planner from "./screens/Planner";
import VenueCurrent from "./components/VenueCurrent";
import VenueCustom from "./components/VenueCustom";
import Venue from "./screens/Venue";
import { LogBox } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
    "Sacramento-Regular": require("./assets/fonts/Sacramento-Regular.ttf"),
    "Sofia-Regular": require("./assets/fonts/Sofia-Regular.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    amatic: require("./assets/fonts/AmaticSC-Bold.ttf"),
    montez: require("./assets/fonts/Montez-Regular.ttf"),
    Parisienne: require("./assets/fonts/Parisienne-Regular.ttf"),
  });

  const bottomTabs = createBottomTabNavigator();

  LogBox.ignoreLogs(['Warning: ...']); 
  const Tabs = () => {
    return (
      <bottomTabs.Navigator>
        <bottomTabs.Screen
          name="Home Screen"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <Ionicons name="home" color={colors.action} size={22}></Ionicons>
            ),
            tabBarActiveTintColor: colors.secondary200,
          }}
        ></bottomTabs.Screen>
        <bottomTabs.Screen
          name="Planner Screen"
          component={Planner}
          options={{
            tabBarLabel: "Digital Planner",
            tabBarIcon: () => (
              <Ionicons
                name="library"
                color={colors.action}
                size={22}
              ></Ionicons>
            ),
            tabBarActiveTintColor: colors.secondary200,
          }}
        ></bottomTabs.Screen>
      </bottomTabs.Navigator>
    );
  };
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
              headerTitleStyle: {
                color: colors.action200,
                fontFamily: "Pacifico",
              },
            })}
          >
            <Stack.Screen
              name="Home Planner Tab"
              component={Tabs}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="Venue Home"
              component={Venue}
            ></Stack.Screen>
            <Stack.Screen
              name="Venue Current"
              component={VenueCurrent}
            ></Stack.Screen>
            <Stack.Screen
              name="Venue Custom"
              component={VenueCustom}
            ></Stack.Screen>
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
            <Stack.Screen
              name="Playlist Details"
              component={PlaylistDetails}
            ></Stack.Screen>
            <Stack.Screen name="Invite 1" component={Invite}></Stack.Screen>
            <Stack.Screen name="Invite 2" component={Invite2}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PlannerProvider>
    </>
  );
}
