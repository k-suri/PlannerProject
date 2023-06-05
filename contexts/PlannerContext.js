import React, { createContext, useState } from "react";
import uuid from "react-uuid";
export const PlannerContext = createContext({
  currentLocation:null,
  setCurrentLocation:()=> {},
  name:"",
  addVenue:()=> {}
});

const PlannerProvider = ({ children }) => {
    const id = uuid();
    const [location, setLocation] = useState(null);
    const [name, setName] = useState("");
    const addVenue = (name, lat, long) => {setName(name); setLat(lat); setLong(long); } 
    const setCurrentLocation = (locationVal) =>{
      setLocation(locationVal)
    }
    const value={
      currentLocation:location,
      setCurrentLocation:setCurrentLocation,
      name:name,
      addVenue:addVenue
    }
    return (
      <PlannerContext.Provider value={value}>
        {children}
      </PlannerContext.Provider>
    );
  };


  export { PlannerProvider };