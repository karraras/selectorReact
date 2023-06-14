import React, { createContext, useContext } from "react";
import { Country, State, City } from "country-state-city";

const AppContext = createContext(null);

function AppProvider({ children }) {
  const [country, setCountry] = React.useState(Country.getAllCountries());
  const [state, setState] = React.useState("");
  const [newState, setNewState] = React.useState(
    State.getStatesOfCountry(state)
  );
  const [city, setCity] = React.useState("");
  const [newCity, setNewCity] = React.useState("");

  React.useEffect(() => {
    setNewState(State.getStatesOfCountry(state));
  }, [state]);
  React.useEffect(() => {
    setNewCity(City.getCitiesOfCountry(city));
  }, [city]);

  const allValue = {
    country,
    state,
    setState,
    setCountry,
    newState,
    setCity,
    newCity,
  };
  return <AppContext.Provider value={allValue}>{children}</AppContext.Provider>;
}
function useGlobalContext() {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };
