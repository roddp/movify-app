import { useReducer, createContext, useContext } from "react";
import reducer from "./reducer";
import * as actions from "./actions";

const AppContext = createContext();

const initialState = {
  genresArr: [],
  categArr: [],
  location: "home",
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLocation = (loc) => {
    dispatch({ type: actions.SET_LOCATION, payload: loc });
  };
  const filterGenres = (arr) => {
    dispatch({ type: actions.FILTER_GENRES, payload: arr });
  };

  const filterCategories = (arr) => {
    dispatch({ type: actions.FILTER_CATEGORIES, payload: arr });
  };
  return (
    <AppContext.Provider
      value={{ ...state, filterGenres, filterCategories, setLocation }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
