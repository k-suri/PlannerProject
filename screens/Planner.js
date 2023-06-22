import { StyleSheet, View, Text, Pressable } from "react-native";
import { colors } from "../utils/Colors";
import { useContext } from "react";
import { PlannerContext } from "../contexts/PlannerContext";
import PlannerSection from "../components/PlannerSection";
import { useNavigation } from "@react-navigation/native";

const Planner = () => {
  const plannerContext = useContext(PlannerContext);
  const navigation = useNavigation()
  return (
    <View>
      {plannerContext.venue || plannerContext.todos.length > 0 ? (
        <>
          {plannerContext.venue && (
            <PlannerSection title={"Venue"}>
              <View style={styles.venueDetails}>
                <Text style={styles.name}>{plannerContext.venue.name}</Text>
                <Text style={styles.phone}>{plannerContext.venue.phone}</Text>
                <Pressable onPress={()=>{
                   navigation.navigate("Venue Home")
                }}><Text style={styles.btn}>Choose Another Venue</Text></Pressable>
              </View>
            </PlannerSection>
          )}
          {plannerContext.todos.length > 0 && (
            <PlannerSection title={"Todo List"}></PlannerSection>
          )}
        </>
      ) : (
        <Text style={styles.text}>
          Your planner is empty add essentials from the main menu
        </Text>
      )}
    </View>
  );
};

export default Planner;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Pacifico",
    fontSize: 18,
    color: colors.gray,
    margin: 20,
  },
  venueDetails:{
    display:"flex",
    flexDirection:"column",
  },
  name: {
    fontSize: 20,
    fontFamily: "Pacifico",
    color: colors.action,
  },
  phone: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.gray,
    fontFamily: "Sacramento-Regular",
  },
  btn:{
    backgroundColor:colors.action200,
    color:"white",
    fontSize:18,
    padding:10,
    borderRadius:5,
  }
});
