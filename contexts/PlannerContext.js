
import React, { createContext, useState } from "react";
import uuid from "react-uuid";
export const PlannerContext = createContext({
  currentLocation: null,
  setCurrentLocation: () => {},
  venue: null,
  addVenue: () => {},
  playlist:null,
  addPlaylist: () => {},
  todos:[],
  addTodos:() => {}
});

const PlannerProvider = ({ children }) => {
  const id = uuid();
  const [location, setLocation] = useState(null);
  const [venue, setVenue] = useState(null);
  const [playlistDetails,setPlaylistDetails] = useState(null)
  const [todos, setTodos] = useState([]);
  const addVenue = (venue) => {
    setVenue(venue);
  };
  const setCurrentLocation = (locationVal) => {
    setLocation(locationVal);
  };
  const addPlaylist = (playlist) => {
    console.log(playlist,"ytfgui");
    setPlaylistDetails(playlist)
  };
  const addTodos = (todos)=>{
    setTodos(todos)
  }
  const value = {
    currentLocation: location,
    setCurrentLocation: setCurrentLocation,
    venue: venue,
    addVenue: addVenue,
    playlist: playlistDetails,
    addPlaylist: addPlaylist,
    todos:todos,
    addTodos:addTodos
  };
  return (
    <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>
  );
};

export { PlannerProvider };
