import React, { createContext, useState } from "react";
import uuid from "react-uuid";
export const PlannerContext = createContext({
  currentLocation: null,
  setCurrentLocation: () => {},
  venue: null,
  addVenue: () => {},
  todos:[],
  addTodos:() => {}
});

const PlannerProvider = ({ children }) => {
  const id = uuid();
  const [location, setLocation] = useState(null);
  const [venue, setVenue] = useState(null);
  const [todos, setTodos] = useState([]);
  const addVenue = (venue) => {
    setVenue(venue);

  };
  const setCurrentLocation = (locationVal) => {
    setLocation(locationVal);
  };
  const addTodos = (todos)=>{
    setTodos(todos)
  }
  const value = {
    currentLocation: location,
    setCurrentLocation: setCurrentLocation,
    venue: venue,
    addVenue: addVenue,
    todos:todos,
    addTodos:addTodos
  };
  return (
    <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>
  );
};

export { PlannerProvider };
