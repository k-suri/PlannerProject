import React, { createContext } from "react";
import uuid from "react-uuid";
const PlannerContext = createContext();

const PlannerProvider = ({ children }) => {
    const id = uuid();
    const [lat, setLat] = useState(0.0);
    const [long, setLong] = useState(0.0);
    const [name, setName] = useState("");
    const addVenue = (name, lat, long) => {setName(name); setLat(lat); setLong(long); } 
    return (
      <PlannerContext.Provider value={{ name, lat, long, addVenue }}>
        {children}
      </PlannerContext.Provider>
    );
  };


  export { PlannerProvider };