import { View, StyleSheet, TextInput, Text, Image , Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";
const Invite3 = () => {
  const [data, setData] = useState({
    name1: "pedro",
    name2: "sandra",
    date: "SATURDAY , OCTOBER 6th ",
    address: "123 Anywhere street , Any City, ST 1234",
    time: "2023 | 8:30AM",
  });

  onChangeName1 = (val) => {
    const temp = { ...data, name1: val };
    setData(temp);
  };
  onChangeName2 = (val) => {
    const temp = { ...data, name2: val };
    setData(temp);
  };

  onChangeDate = (val) => {
    const temp = { ...data, date: val };
    setData(temp);
  };
  onChangeTime = (val) => {
    const temp = { ...data, time: val };
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
      <Image
        style={styles.img}
        source={require("../assets/icons/bg.png")}
      ></Image>
      <View style={styles.container}>
        <Text style={styles.text}>
        BE OUR GUEST WE EXPECT YOUR PRESENCE AT OUR WEDDING
        </Text>
        <TextInput
          onChangeText={onChangeName1}
          value={data.name1}
          style={styles.txt2}
        ></TextInput>
        <Text style={styles.text}>&</Text>
        <TextInput onChangeText={onChangeName2} value={data.name2} style={styles.txt2}></TextInput>
        <Text style={styles.text}>SAVE THE DATE</Text>
        <TextInput  onChangeText={onChangeDate}
          value={data.date} 
          ></TextInput>
        <TextInput
          onChangeText={onChangeTime}
          value={data.time}
          style={styles.text3}
        ></TextInput>
        <Image
          style={styles.loc}
          source={require("../assets/icons/placeholder.png")}
        ></Image>
      </View>
      <Image
        style={styles.rings}
        source={require("../assets/icons/rings.png")}
      ></Image>
      <TextInput 
       onChangeText={onChangeAddress}
       value={data.address}>
       
      </TextInput>
    </View> 
    </TouchableWithoutFeedback>
  );
};

export default Invite3;

const styles = StyleSheet.create({
  parent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "90%",
    margin: 30,
  },
  img: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  container: {
    position: "relative",
    height: "70%",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 120,
  },
  rings: {
    position: "absolute",
    top: 65,
    width: 50,
    height: 50,
  },
  text: {
    width: 300,
    fontFamily: "amatic",
    color: "black",
    textAlign: "center",
    fontSize:30
  },
  loc: {
    width: 40,
    height: 40,
  },
  txt2: {
    fontFamily: "montez",
    fontSize: 50,
    color:"#E8C913"
  },
});
