import { StyleSheet, View, Text, Pressable , FlatList, ScrollView} from "react-native";
import { colors } from "../utils/Colors";
import { useContext } from "react";
import { PlannerContext } from "../contexts/PlannerContext";
import PlannerSection from "../components/PlannerSection";
import { useNavigation } from "@react-navigation/native";


const Planner = () => {
  const plannerContext = useContext(PlannerContext);
  const navigation = useNavigation()

  const styles = StyleSheet.create({
    text: {
      fontFamily: "Pacifico",
      fontSize: 18,
      color: colors.gray,
      margin: 20,
    },
    venueDetails: {
      display: "flex",
      flexDirection: "column",
    },
    name: {
      fontSize: 20,
      fontFamily: "Pacifico",
      color:  plannerContext.modeLight? colors.action:colors.white,
    },
    phone: {
      marginTop: 20,
      fontSize: 15,
      fontWeight: "600",
      color: plannerContext.modeLight? colors.gray:colors.white,
      fontFamily: "Sacramento-Regular",
    },
    playlistId: {
      marginTop:10,
      fontSize: 15,
      color: plannerContext.modeLight? colors.gray:colors.white,
      opacity: 0.5
    },
    btn: {
      marginTop: 20,
      backgroundColor: plannerContext.modeLight? colors.action200:colors.actionDark,
      color: "white",
      fontSize: 18,
      padding: 10,
      borderRadius: 5,
    },
    list: {
      flex: 1,
      marginTop: 10,
    },
    todoItem: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    todoText: {
      flex: 1,
      fontSize: 16,
    },
  });
  return (
    <ScrollView style={{backgroundColor:plannerContext.modeLight?colors.grayLight:colors.primaryDark}}>
      {plannerContext.venue ||
        plannerContext.todos.length > 0 ||
        plannerContext.playlist ? (
        <>
          {plannerContext.venue && (
            <PlannerSection title={"Venue"}>
              <View style={styles.venueDetails}>
                <Text style={styles.name}>{plannerContext.venue.name}</Text>
                <Text style={styles.phone}>{plannerContext.venue.phone}</Text>
                <Pressable onPress={() => {
                  navigation.navigate("Venue Home")
                }}><Text style={styles.btn}>Choose Another Venue</Text></Pressable>
              </View>
            </PlannerSection>
          )}
          {plannerContext.todos.length > 0 && (
            <PlannerSection title={"Todo List"}>
              <FlatList
                style={styles.list}
                data={plannerContext.todos}
                renderItem={({ item }) => (
                  <View style={styles.todoItem}>
                    <Text style={styles.todoText}>{item.text}</Text>
                  </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
              <Pressable onPress={() => {
                navigation.navigate("Todo List Screen")
              }}><Text style={styles.btn}>Edit Todo List</Text></Pressable>
            </PlannerSection>
          )}
          {plannerContext.playlist && (
            <PlannerSection title={"PlayList"}>
              <View style={styles.venueDetails}>
                <Text style={styles.name}>{plannerContext.playlist.name}</Text>
                <Text style={styles.playlistId}>{plannerContext.playlist.id}</Text>
                <Pressable onPress={() => {
                  navigation.navigate("Playlist Screen")
                }}><Text style={styles.btn}>Choose Another Playlist</Text></Pressable>
              </View>
            </PlannerSection>
          )}
        </>
      ) : (
        <Text style={styles.text}>
          Your planner is empty add essentials from the main menu
        </Text>
      )}
    </ScrollView>
  );
};

export default Planner;


