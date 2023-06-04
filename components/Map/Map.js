import * as Location from "expo-location";
import { useContext, useEffect, useState } from "react";
import { PlannerContext } from "../../contexts/PlannerContext";
import { getVenues } from "../../utils/Yelp";
import { StyleSheet, Text, Image, Button, Linking } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { colors } from "../../utils/Colors";
const Map = () => {
  const plannerContext = useContext(PlannerContext);
  const [cafes, setCafes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const deltas = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("request not granted");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      plannerContext.setCurrentLocation(location);
    };
    getLocation();
  }, []);

  useEffect(() => {
    if (plannerContext.currentLocation) {
      const coordinates = {
        latitude: plannerContext.currentLocation.coords.latitude,
        longitude: plannerContext.currentLocation.coords.longitude,
      };
      const getData = async () => {
        const cafes = await getVenues(
          coordinates,
          "coffee,coffeeroasteries,coffeeshops"
        );
        const tempCafes = [];
        cafes.forEach((element) => {
          const obj = {
            name: element.name,
            coordinates: element.coordinates,
            id: element.id,
            imageUrl: element.image_url,
            yelpUrl: element.yelp_url,
            phone: element.phone,
          };
          tempCafes.push(obj);
        });
        setCafes(tempCafes);
        const restaurants = await getVenues(coordinates, "restaurants");
        const tempRestaurants = [];
        restaurants.forEach((element) => {
          const obj = {
            name: element.name,
            coordinates: element.coordinates,
            id: element.id,
            imageUrl: element.image_url,
            yelpUrl: element.yelp_url,
            phone: element.phone,
          };
          tempRestaurants.push(obj);
        });
        setRestaurants(tempRestaurants);
      };
      getData();
    }
  }, [plannerContext.currentLocation]);

  const renderCafes = () => {
    return cafes.map((location) => (
      <Marker
        pinColor="#9c89b8"
        key={location.id}
        coordinate={location.coordinates}
        style={{ width: 200 }}
      >
        <Callout style={styles.callout}>
          <Text style={styles.name}>{location.name}</Text>
          <Text style={styles.phone}>{location.phone}</Text>
          <Button
            title="Select"
            onPress={plannerContext.addVenue(location)}
            style={styles.select}
          ></Button>
        </Callout>
      </Marker>
    ));
  };

  const renderRestaurants = () => {
    return restaurants.map((location) => (
      <Marker
        pinColor="pink"
        key={location.id}
        coordinate={location.coordinates}
      >
        <Callout style={styles.callout}>
          <Text style={styles.name}>{location.name}</Text>
          <Text style={styles.phone}>{location.phone}</Text>
          <Button
            title="Select"
            onPress={plannerContext.addVenue(location)}
            style={styles.select}
          ></Button>
        </Callout>
      </Marker>
    ));
  };

  return plannerContext.currentLocation ? (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: plannerContext.currentLocation?.coords.latitude,
        longitude: plannerContext.currentLocation?.coords.longitude,
        ...deltas,
      }}
    >
      {cafes.length > 0 && renderCafes()}
      {restaurants.length > 0 && renderRestaurants()}
    </MapView>
  ) : (
    <Text>Loading...</Text>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  callout: {
    width: 200,
    paddingHorizontal: 10,
  },
  select: {
    width: 50,
    color: "white",
    backgroundColor: colors.action200,
  },
  name: {
    fontSize: 20,
    fontFamily: "Pacifico",
    color: colors.action,
  },
  phone: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.primary,
    fontFamily: "Sacramento-Regular",
  },
  review:{
    fontFamily: "Sacramento-Regular",
    marginBottom: 5,
    fontSize:25
  }
});
