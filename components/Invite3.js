import { View, StyleSheet, TextInput, Text, Image ,Button, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { useState , useRef } from "react";
import { useContext} from "react";
import { PlannerContext } from "../contexts/PlannerContext";
import { colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
const Invite3 = () => {
  const navigation = useNavigation()
  const [status, requestPermission] = MediaLibrary.usePermissions();


  if (status === null) {
    requestPermission();
  }
  const imageRef = useRef();
  const plannerContext = useContext(PlannerContext);
  onChangeName1 = (val) => {
    const temp = { ...plannerContext.invitation, name1: val };
    plannerContext.setInvitation(temp);
  };
  onChangeName2 = (val) => {
    const temp = { ...plannerContext.invitation, name2: val };
    plannerContext.setInvitation(temp);
  };

  onChangeDate = (val) => {
    const temp = { ...plannerContext.invitation, date: val };
    plannerContext.setInvitation(temp);
  };
  onChangeTime = (val) => {
    const temp = { ...plannerContext.invitation, time: val };
    plannerContext.setInvitation(temp);
  };

  onChangeAddress = (val) => {
    const temp = { ...plannerContext.invitation, address: val };
    plannerContext.setInvitation(temp);
  };
  const onSaveImageAsync = async () => {
    plannerContext.setSelectedInvitation("Invite3")
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("your image is Saved to gallery!");
      }
      navigation.navigate("Planner Screen")
    } catch (e) {
      console.log(e);
    }
  };
  return ( 
    <TouchableWithoutFeedback onPress={()=>
      Keyboard.dismiss()}>
    <View style={styles.parent} 
     ref={imageRef}>
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
          value={plannerContext.invitation.name1}
          style={styles.txt2}
        ></TextInput>
        <Text style={styles.text}>&</Text>
        <TextInput onChangeText={onChangeName2} value={plannerContext.invitationD.name2} style={styles.txt2}></TextInput>
        <Text style={styles.text}>SAVE THE DATE</Text>
        <TextInput  onChangeText={onChangeDate}
          value={plannerContext.invitation.date} 
          ></TextInput>
        <TextInput
          onChangeText={onChangeTime}
          value={plannerContext.invitation.time}
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
       value={plannerContext.invitation.address}>
       
      </TextInput>
    </View> 
    <Button title="Select & Download" color="#841584" onPress={onSaveImageAsync}></Button>
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
    height: "85%",
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
