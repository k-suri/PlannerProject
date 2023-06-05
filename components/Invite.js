import { useState } from "react";
import { View, StyleSheet, TextInput, Text , Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { colors } from "../utils/Colors";

const Invite = () => {
  const [data, setData] = useState({
    name: "ashley's",
    date: "10/03/2022",
    time: "8:00pm",
    venue: "palsade gardens 245 stoney creek",
  });

  onChangeName = (val) => {
    const temp = { ...data, name: val };
    setData(temp);
  };

  onChangeTime = (val) => {
    const temp = { ...data, time: val };
    setData(temp);
  };
  onChangeVenue = (val) => {
    const temp = { ...data, venue: val };
    setData(temp);
  };
  onChangeDate = (val) => {
    const temp = { ...data, Date: val };
    setData(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pattern}>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View> 
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
        <View style={styles.bgBar}></View>
      </View>
      {/* {<View style={styles.balloon}>
        <View style={styles.ball}></View>
        <View style={styles.stick}></View>
      </View>} */}
      <View style={styles.triangle}></View>

      <View style={styles.layerA}>
        <Text style={styles.text}>a hearty Welcome to </Text>
      </View>
      <View style={styles.layerB}>
        <TextInput
          style={[styles.Inputs, styles.text2]}
          class="name"
          onChangeText={onChangeName}
          value={data.name}
        ></TextInput>
        <Text style={styles.text3}>birthday bash</Text>
      </View>
      <Image
      style={styles.bow}
         source={require('../assets/icons/bow-tie.png')}
      /> 
      <Image
      style={styles.bow2}
         source={require('../assets/icons/bow-tie.png')}
      />

      <View style={styles.layerC}>
        <TextInput
        style={styles.text3 }
          class="date"
          onChangeText={onChangeDate}
          value={data.date}
        ></TextInput>
        <TextInput
        style={styles.text }
          class="time"
          onChangeText={onChangeTime}
          value={data.time}
        ></TextInput>
        <TextInput
          class="venue"
          style={styles.text }
          onChangeText={onChangeVenue}
          value={data.venue}
        ></TextInput> 
        <Text style={styles.text3}> R.s.v.p to xxx.xxx.xxx</Text>
      </View>
    </View>
  );
};

export default Invite;

const styles = StyleSheet.create({
  container: {
    height: "80%",
    backgroundColor: "#fff",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    position:"relative",
    overflow:"hidden",
  },
  Inputs: {
    width: "70%",
    height: 32,
    padding: 7,
    fontStyle: "italic",
    
  },
 bow:{ 
   
    position:"absolute",
    height:60,
    width:60,
    left:63,
    top:262,
    zIndex:1

 },
 bow2:{ 
   
    position:"absolute",
    height:60,
    width:60,
    right:63,
    top:262,
    zIndex:1

 },
  text: {
    fontFamily: "montez",
    fontSize: 24,
    textAlign: "center",
    padding:7,
    color:"#FFFDD0"

  }, 
  text2:{

    fontFamily: "Pacifico",
    fontSize: 28,
    textAlign: "center",
    padding:5

  }, 

  text3:{

    fontFamily: "amatic",
    fontSize: 24,
    textAlign: "center",
    padding:5,
    color:"#55AECD",
    
    

  },

  layerA: {
    height: 60,
    width: 150,
    backgroundColor: "#ffb6c1",
    borderRdius: 5,
    border: 2,
    borderRadius: 5,
    borderColor: "#ffb6c1",
    borderTopLeftRadius: 3.2,
    borderTopRightRadius: 3.2,
    borderBottomLeftRadius: 3.2,
    borderBottomRightRadius: 3.2,
    borderBottomColor: colors.action,
    borderBottomWidth: 4,
  },
  layerB: {
    height: 90,
    width: 200,
    backgroundColor: "#ffb6c1",
    borderRdius: 5,
    border: 2,
    borderColor: "#ffb6c1",
    alignItems: "center",
    borderTopLeftRadius: 3.2,
    borderTopRightRadius: 3.2,
    borderBottomLeftRadius: 3.2,
    borderBottomRightRadius: 3.2,
    borderBottomColor: colors.action,
    borderBottomWidth: 4,
    position:"relative"
    
  },

  triangle: {
    width: 50,
    height: 180,
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightWidth: 25,
    borderRightColor: "transparent",
    borderBottomWidth: 60,
    borderBottomColor: "#FFD580",
    
  },

  layerC: {
    height: 155,
    width: 250,
    backgroundColor: "#ffb6c1",
    borderRdius: 5,
    border: 2,
    borderColor: "#ffb6c1",
    alignItems: "center",
    borderTopLeftRadius: 3.2,
    borderTopRightRadius: 3.2,
    borderBottomLeftRadius: 3.2,
    borderBottomRightRadius: 3.2,
    borderBottomColor: colors.action,
    borderBottomWidth: 4,
    marginBottom:50,
    
  },

  pattern:{
    position:"absolute",
    height:"250%",
    width:"270%",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  bgBar:{
    width:10,
    height:"100%",
    backgroundColor:colors.action,
    transform:"rotateZ(-45deg)"
  }
});
