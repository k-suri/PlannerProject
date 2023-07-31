import { View, StyleSheet, TextInput, Text, Image ,Button, Keyboard, Pressable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { useState , useRef } from "react";
import { useContext} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { PlannerContext } from "../contexts/PlannerContext";
import { colors } from "../utils/Colors";
const Invite3 = () => {
  const getDateValue = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${month}-${day}-${year}`;
    return formattedDate
  };
  const [data, setData] = useState({
    name1: "pedro",
    name2: "sandra",
    date: new Date(),
    address: "123 Anywhere street , Any City, ST 1234",
    time: "2023 | 8:30AM",
  });
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [pickDate, setPickDate] = useState(false);


  if (status === null) {
    requestPermission();
  }
  const imageRef = useRef();
  const plannerContext = useContext(PlannerContext);
  onChangeName1 = (val) => {
    const temp = { ...data, name1: val };
    setData(temp);
  };
  onChangeName2 = (val) => {
    const temp = { ...data, name2: val };
    setData(temp);
  };

  onChangeDate = (val) => {
    const date = new Date(val.nativeEvent.timestamp);
    const temp = { ...data, date: date };
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
  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("your image is Saved to gallery!");
      }
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
          value={data.name1}
          style={styles.txt2}
        ></TextInput>
        <Text style={styles.text}>&</Text>
        <TextInput onChangeText={onChangeName2} value={data.name2} style={styles.txt2}></TextInput>
        <Text style={styles.text}>SAVE THE DATE</Text>
        <Pressable onPress={() => setPickDate(true)}>
            <Text>{getDateValue(data.date)}</Text>
          </Pressable>

          {pickDate && (
            <DateTimePicker
              style={styles.datePickerStyle}
              value={data.date}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-1900"
              maxDate="01-01-2000"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor: "gray",
                  alignItems: "flex-start",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: "gray",
                },
                dateText: {
                  fontSize: 17,
                },
              }}
              onChange={(date) => {
                setPickDate(false);
                onChangeDate(date);
              }}
            />
          )}
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
    <Button title="Download" color="#841584" onPress={onSaveImageAsync}></Button>
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
