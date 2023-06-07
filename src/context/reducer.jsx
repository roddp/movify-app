import * as actions from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.FILTER_GENRES:
      return {
        ...state,
        genresArr: action.payload,
      };
    case actions.FILTER_CATEGORIES:
      return {
        ...state,
        categArr: action.payload,
      };
    case actions.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
