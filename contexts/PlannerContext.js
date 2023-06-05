import React, { createContext,useState } from "react";
import uuid from "react-uuid";
export const PlannerContext = createContext();

const PlannerProvider = ({ children }) => {
    const id = uuid();
    const [lat, setLat] = useState(0.0);
    const [long, setLong] = useState(0.0);
    const [name, setName] = useState("");
    const [playlist, setPlaylist] = useState([]);
    const addPlaylist = (playlist) => { setPlaylist(playlist); };
    const addVenue = (name, lat, long) => { setName(name); setLat(lat); setLong(long); } 
    return (
      <PlannerContext.Provider value={{ name, lat, long, addVenue, playlist, addPlaylist }}>
        {children}
      </PlannerContext.Provider>
    );
  };


  export { PlannerProvider };