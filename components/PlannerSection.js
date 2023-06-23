import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/Colors";
const PlannerSection = ({ children, title }) => {
  return (
    <View style={style.section}>
      <Text style={style.title}>{title}</Text>
      {children}
    </View>
  );
};

export default PlannerSection;

const style = StyleSheet.create({
  section: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    minHeight: 200,
    elevation: 4,
    shadowColor: "#5A5A5A",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 28,
    borderBottomColor: colors.grayLight,
    borderBottomWidth: 3,
    paddingBottom: 2,
    fontFamily: "Pacifico",
    color: colors.secondary200,
  },
});
