import { View, Image, StyleSheet, Text } from "react-native";
import { colors } from "../utils/Colors";
const Loader = () => {
  return (
    <View style={styles.loader}>
      <View style={styles.imgWrapper}>
        <Image
          source={require("../assets/icons/cat.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   
  },
  imgWrapper:{
    backgroundColor: "white",
    padding:50,
    borderRadius:111
  },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    fontFamily: "Pacifico",
    fontSize: 25,
    color: colors.action200,
  },
});
