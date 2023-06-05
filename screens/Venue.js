import { View, StyleSheet, Text } from "react-native";
import Map from "../components/Map/Map";
import { colors } from "../utils/Colors";
import { useContext, useEffect, useState } from "react";
import ConfirmVenueModal from "../components/Map/ConfirmVenueModal";
import { PlannerContext } from "../contexts/PlannerContext";
import { useNavigation } from "@react-navigation/native";

const Venue = () => {
  const [showModal, setShowModal] = useState(false);
  const [tempLocation, setTempLocation] = useState(null);
  const plannerContext = useContext(PlannerContext);
  const navigation = useNavigation()


  const confirmHandler = () => {
    plannerContext.addVenue(tempLocation);
    setShowModal(false);
    setTempLocation(null);
    navigation.navigate("Home Screen")
  };

  const cancelHandler = () => {
    setShowModal(false);
    setTempLocation(null);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabs}>
        <View style={styles.tab}>
          <View style={styles.hintCafe}></View>
          <Text>Nearby Cafes</Text>
        </View>
        <View style={styles.tab}>
          <View style={styles.hintRest}></View>
          <Text>Nearby Restaurants</Text>
        </View>
      </View>
      <Map setShowModal={setShowModal} setTempLocation={setTempLocation}></Map>
      <ConfirmVenueModal
        showModal={showModal}
        setShowModal={setShowModal}
        tempLocation={tempLocation}
        confirmHandler={confirmHandler}
        cancelHandler={cancelHandler}
      ></ConfirmVenueModal>
    </View>
  );
};

export default Venue;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  tabs: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 5,
    borderColor: colors.action200,
    borderWidth: 5,
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
  },
  hintCafe: {
    height: 20,
    width: 50,
    backgroundColor: "#8c3ceb",
    marginRight: 10,
  },
  hintRest: {
    height: 20,
    width: 50,
    backgroundColor: "crimson",
    marginRight: 10,
  },
});
