import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Venue = () => {
  const navigation = useNavigation();
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

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  menuItem: {
    minHeight: 150,
    width: "40%",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#5A5A5A",
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
  },
});
