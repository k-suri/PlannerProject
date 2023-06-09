import { View, StyleSheet, TextInput, Text, Image  , 
Keyboard} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";
const Invite4 = () => {
  const [data, setData] = useState({
    name: "Mathews",
    date: "SATURDAY , OCTOBER 6th | 8:00AM",
    address: "123 Anywhere street , Any City ST 1234",
    number: "1234567",
  });

  onChangeName = (val) => {
    const temp = { ...data, name: val };
    setData(temp);
  };

  onChangeDate = (val) => {
    const temp = { ...data, date: val };
    setData(temp);
  };
  onChangeNumber = (val) => {
    const temp = { ...data, number: val };
    setData(temp);
  };

  onChangeAddress = (val) => {
    const temp = { ...data, address: val };
    setData(temp);
  };
  return ( 
    <TouchableWithoutFeedback onPress={()=>
      Keyboard.dismiss()}>
    <View style={styles.parent}>
      <View style={styles.box}>
        <View style={styles.border}>
          <View style={styles.title}>
            <Text style={styles.txt3}>THE </Text>
            <TextInput
              onChangeText={onChangeName}
              value={data.name}
              style={styles.txt3}
            ></TextInput>
            <Text style={styles.txt3}>ARE SETTLED IN</Text>
          </View>
          <Text style={styles.txt2}>Housewarming celebration</Text>

          <TextInput
            onChangeText={onChangeDate}
            value={data.date}
            style={styles.txt3}
          ></TextInput>
          <TextInput
            onChangeText={onChangeAddress}
            value={data.address}
            style={styles.txt3}
          ></TextInput>
          <View style={styles.title}>
            <Text style={styles.txt3}>RSVP AT </Text>
            <TextInput
              onChangeText={onChangeNumber}
              value={data.number}
              style={styles.txt3}
            ></TextInput>
          </View>
          <View style={styles.house}>
            <Image
              source={require("../assets/icons/heart.png")}
              style={styles.hrt}
            ></Image>
            <View style={styles.triangle}></View>
            <View style={styles.container}>
              <View style={styles.rec}></View>
            </View>
          </View>
        </View>
      </View>
    </View> 
    </TouchableWithoutFeedback>
  );
};

export default Invite4;

const styles = StyleSheet.create({
  parent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "90%",
    margin: 12,
    marginTop: 30,
    backgroundColor: "white",
  },
  box: {
    backgroundColor: "#58493B",
    borderRadius: 10,
    height: "70%",
    width: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  border: {
    width: "90%",
    height: "90%",
    backgroundColor: "transparent",
    borderWidth: 9,
    borderColor: "#E5B2F8",
    borderRadius: 10,
    margin: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  hrt: {
    position: "absolute",
    height: 50,
    width: 50,
    top: 150,
    left: 60,
    zIndex: 1,
  },
  rec: {
    width: "30%",
    backgroundColor: "white",
    position: "absolute",
    height: "60%",
    bottom: 0,
    left: 50,
  },
  house: {
    height: 400,
    width: "90%",
    position: "relative",
  },
  triangle: {
    width: 80,
    height: 200,
    borderLeftWidth: 85,
    borderLeftColor: "transparent",
    borderRightWidth: 85,
    borderRightColor: "transparent",
    borderBottomWidth: 100,
    borderBottomColor: "#E5B2F8",
  },
  container: {
    height: 100,
    width: 120,
    backgroundColor: "#E5B2F8",
    position: "relative",
  },
  house: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 600,
    bottom: 30,
  },
  text: {
    width: 300,
    fontFamily: "pacifico",
    color: "black",
    textAlign: "center",
    fontSize: 30,
  },

  txt2: {
    fontFamily: "Sacramento-Regular",
    fontSize: 33,
    color: "#fdfd96",
    minWidth: 320,
    height: 50,
    paddingHorizontal: 10,
    textAlign:"center"
  },

  txt3: {
    fontFamily: "amatic",
    fontSize: 20,
    color: "#ECC6FA",
    zIndex: 10,
  },
});
