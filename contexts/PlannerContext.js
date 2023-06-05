
import React, { createContext, useState } from "react";
import uuid from "react-uuid";
export const PlannerContext = createContext({
  currentLocation: null,
  setCurrentLocation: () => {},
  venue: null,
  addVenue: () => {},
  playlist:null,
  addPlaylist: () => {},
});

const PlannerProvider = ({ children }) => {
  const id = uuid();
  const [location, setLocation] = useState(null);
  const [venue, setVenue] = useState(null);
  const [playlistDetails,setPlaylistDetails] = useState(null)
  const addVenue = (venue) => {
    setVenue(venue);
  };
  const setCurrentLocation = (locationVal) => {
    setLocation(locationVal);
  };
  const addPlaylist = (playlist) => {
    console.log(playlist,"ytfgui");
    setPlaylistDetails(playlist)
  }
  const value = {
    currentLocation: location,
    setCurrentLocation: setCurrentLocation,
    venue: venue,
    addVenue: addVenue,
    playlist: playlistDetails,
    addPlaylist: addPlaylist,
  };
  return (
    <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>
  );
};

export { PlannerProvider };
