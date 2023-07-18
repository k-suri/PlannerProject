import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/Colors";
import { useContext } from "react";
import { PlannerContext } from "../contexts/PlannerContext";

const Venue = () => {
  const navigation = useNavigation();
  const plannerContext = useContext(PlannerContext)
  const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor: plannerContext.modeLight? colors.grayLight:colors.primaryDark,
      flex:1,
    },
    menuItem: {
      minHeight: 150,
      width: "40%",
      backgroundColor: plannerContext.modeLight? colors.white:colors.secondary200Dark,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      elevation: 4,
      shadowColor: plannerContext.modeLight?colors.gray:colors.black,
      shadowOffset: { height: 2, width: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    image: {
      height: 70,
      width: 70,
    },
    text: {
      fontFamily: "Pacifico",
      fontSize: 18,
      color:plannerContext.modeLight? colors.gray:colors.white
    },
  });
  return (
    <View style={styles.wrapper}>
        <Pressable style={styles.menuItem} onPress={()=> navigation.navigate("Venue Current",{getCurrentLocation:true})}>
          <Image
            source={require("../assets/icons/pins.png")}
            style={styles.image}
          ></Image>
          <Text style={styles.text}>Explore nearby locations</Text>
        </Pressable>
        <Pressable style={styles.menuItem} onPress={()=> navigation.navigate("Venue Custom",{getCurrentLocation:false})}>
          <Image
            source={require("../assets/icons/pins.png")}
            style={styles.image}
          ></Image>
          <Text style={styles.text}>Explore custom location</Text>
        </Pressable>
    </View>
  );
};

export default Venue;


