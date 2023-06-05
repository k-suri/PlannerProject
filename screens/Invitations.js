import { View, StyleSheet, Text, Image, Button } from "react-native";
import Invite from "../components/Invite";
import { useNavigation } from '@react-navigation/native';
const Invitations = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text2}>Templates</Text>
      <View style={styles.main}>
        <View style={styles.sec}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../assets/icons/cake.png")}
            ></Image>
          </View>
          <Button title="Edit" color="#841584"
          onPress={() => {
            navigation.navigate("Invite 1");
          }}
          ></Button>
        </View>
        <View style={styles.sec}>
        <View style={styles.box}>
            
        </View>
        <Button title="Edit" color="#841584" 
        
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
    alignItems:'center'
  },

  box: {
    height: 170,
    width: 150,
    border: 5,
    backgroundColor: "#FEFFE4",
    borderRadius: 7,
    marginTop: 50,
    padding: 10,
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
  sec: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 300,
  },
});
