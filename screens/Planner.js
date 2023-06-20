import { StyleSheet, View, Text } from "react-native";
import { colors } from "../utils/Colors";
import { useContext } from "react";
import { PlannerContext } from "../contexts/PlannerContext";
import PlannerSection from "../components/PlannerSection";

const Planner = () => {
  const plannerContext = useContext(PlannerContext);
  return (
    <View>
      {plannerContext.venue || plannerContext.todos.length > 0 ? (
        <>
         { plannerContext.venue &&  <PlannerSection title={"Venue"}></PlannerSection>}
         {plannerContext.todos.length > 0 && <PlannerSection title={"Todo List"}></PlannerSection>}
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
});
