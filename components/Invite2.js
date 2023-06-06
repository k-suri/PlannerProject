import { View, StyleSheet, TextInput, Text, Image } from "react-native";
import { useState } from "react";
const invite2 = () => {
  const [data, setData] = useState({
    couple: "ryan and ashley",
    date: "SATURDAY , may 6th 2018, 8:30",
    venue: "up and down bistro",
    address: "1294wayward lane sand diego",
    year:"twenty'th"
  });

  onChangeName = (val) => {
    const temp = { ...data, couple: val };
    setData(temp);
  };
  onChangeYear = (val) => {
    const temp = { ...data, year: val };
    setData(temp);
  };

  onChangeDate = (val) => {
    const temp = { ...data, date: val };
    setData(temp);
  };
  onChangeVenue = (val) => {
    const temp = { ...data, venue: val };
    setData(temp);
  };

  onChangeAddress = (val) => {
    const temp = { ...data, address: val };
    setData(temp);
  };
  return (
    <View style={styles.parent}>
      <View style={styles.main}>
        <View style={styles.top}>
        <TextInput
            onChangeText={onChangeYear}
            value={data.year}
            style={styles.text}
          ></TextInput>
          <Image
            style={styles.img}
            source={require("../assets/icons/gold.png")}
          ></Image>
        </View>
        <View style={styles.bottom}>
          <TextInput style={styles.text3}>JOIN US IN CELEBRATING</TextInput>
          <TextInput
            onChangeText={onChangeName}
            value={data.couple}
            style={styles.text3}
          ></TextInput>
          <TextInput
            onChangeText={onChangeDate}
            value={data.date}
            style={styles.text3}
          ></TextInput>
          <TextInput
            onChangeText={onChangeVenue}
            value={data.venue}
            style={styles.text3}
          ></TextInput>
          <TextInput
            onChangeText={onChangeAddress}
            value={data.address}
            style={styles.text3}
          ></TextInput>
          <TextInput style={styles.text3}>
            Please Rsvp to Marty at marty@gmail.com
          </TextInput>
        </View>
      </View>
    </View>
  );
};

export default invite2;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    height: "80%",
    marginTop: 90,
    width: "90%",
    justifyContent: "space-evenly",
    backgroundColor: "#FBF4D9",
    elevation: 2,
  }, 
  parent:{ 
    display:"flex"
    
  }
,
  img: {
    height: "100%",
    width: "100%",
  },
  top: {
    position: "relative",
    height: "48%",
    width: "90%",
  },
  text: {
    fontFamily: "Pacifico",
    fontSize: 65,
    position: "absolute",
    zIndex: 1,
    color: "#FFFFFF",
    top: 20,
    left: 10,
  },

  txt1: {
    fontSize: 15,
    textAlign: "right",
  },
  bottom: {
    height: "42%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "right",
    padding: 10,
  },

  letter: {
    width: 400,
    height: 300,
    backgroundColor: "#FFFFFF",
    marginTop: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  triangle: {
    width: 350,
    height: 400,
    borderLeftWidth: 170,
    borderLeftColor: "transparent",
    borderRightWidth: 170,
    borderRightColor: "transparent",
    borderBottomWidth: 170,
    borderBottomColor: "#F5F2DC",
  },

  rec: {
    backgroundColor: "#F4EECE",
    width: 350,
    height: 300,
    borderWidth: 20,
    borderColor: "#EAE5C6",
  },
  text3: {
    fontFamily: "amatic",
    fontSize: 25,
    
    textAlign:"right",
    color: "#C0BFB9",
  },
});
