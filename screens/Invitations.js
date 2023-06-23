import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Invite from "../components/Invite";
import Invite2 from "../components/Invite2";
import { useNavigation } from "@react-navigation/native";
const Invitations = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.text2}>Templates</Text>
      <View style={styles.main}>
        <View style={styles.sec}>
          <View
            style={styles.box}
            onMouseEnter={() => {
              {
                styles.boxHover;
              }
            }}
          >
            <Image
              style={styles.img}
              source={require("../assets/icons/cake.png")}
            ></Image>
          </View>

          <View style={styles.btn}>
            <Image
              source={require("../assets/icons/edit.svg")}
              style={styles.icon}
            ></Image>
            <Button
              title="customize"
              color="#841584"
              onPress={() => {
                navigation.navigate("Invite 1");
              }}
            ></Button>
          </View>
        </View>
        <View style={styles.sec}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../assets/icons/anniversary.png")}
            ></Image>
          </View>
          <Button
            title="customize"
            color="#841584"
            onPress={() => {
              navigation.navigate("Invite 2");
            }}
          ></Button>
        </View>
        <View style={styles.sec}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../assets/icons/Wedding.png")}
            ></Image>
          </View>
          <Button
            title="customize"
            color="#841584"
            onPress={() => {
              navigation.navigate("Invite 3");
            }}
          ></Button>
        </View>
        <View style={styles.sec}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../assets/icons/houseWarming.png")}
            ></Image>
          </View>
          <Button
            title="customize"
            color="#841584"
            onPress={() => {
              navigation.navigate("Invite 4");
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default Invitations;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap:"wrap"
  },

  box: {
    height: 190,
    width: 150,
    border: 5,
    backgroundColor: "#FCFBFB",
    borderRadius: 7,
    marginTop: 50,
    padding: 11,
  },



  text2: {
    fontFamily: "Pacifico",
    fontSize: 28,
    textAlign: "center",
    padding: 5,
    color: "#A54CAB",
  },

  img: {
    width: "100%",
    height: "100%",
  },
  icon: {
    height: 15,
    width: 15,
  },
  sec: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 300,
  },
  btn: {
    display: "flex",
  },
});
