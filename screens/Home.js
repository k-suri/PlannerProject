import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import MenuItem from "../components/MenuItem";
import { colors } from "../utils/Colors";

const Home = () => {
  const sections = [
    {
      title: "Venue",
      img: require("../assets/icons/venue.png"),
      screen: "Venue Home",
    },
    {
      title: "Invitations",
      img: require("../assets/icons/invitation.png"),
      screen: "Invitation Screen",
    },
    {
      title: "Guest List",
      img: require("../assets/icons/guest-list.png"),
      screen: "Guest List Screen",
    },
    {
      title: "To-do List",
      img: require("../assets/icons/sticky-note.png"),
      screen: "Todo List Screen",
    },
    {
      title: "Playlist",
      img: require("../assets/icons/playlist.png"),
      screen: "Playlist Screen",
    },
  ];
  return (
    <ScrollView>
      <View style={styles.sign}>
        <View style={styles.bars}>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
        </View>
        <View style={styles.board}>
          <Text style={styles.title}>
            Your perfect partner to plan an event conveniently
          </Text>
        </View>
      </View>
      <View style={styles.itemsWrapper}>
        {sections.map((section) => (
          <MenuItem item={section} key={section.title} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  itemsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  sign: {
    flexDirection: "column",
    alignItems: "center",
  },
  bars: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 200,
  },
  bar: {
    width: 10,
    height: 50,
    backgroundColor: "#D3D3D3",
  },
  board: {
    width: 200,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    elevation: 4,
    shadowColor: "#5A5A5A",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding:10
  },
  title:{
    fontFamily:"Sacramento-Regular",
    color:"white",
    fontSize:25
  }
});
