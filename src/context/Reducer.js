import aType from "../utils/ActionType";

const reducer = (state, action) => {
  switch (action.type) {
    case aType.CHECKAUTH:
      return {
        ...state,
        signature: action.payload,
      };
    case aType.LOGIN:
      return {
        ...state,
        signature: action.payload,
      };
    case aType.PROFILE:
      return {
        ...state,
        profiles: action.payload,
      };
    case aType.SET_CHOICE:
      return {
        ...state,
        choice: action.payload,
      };
    case aType.ALL_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case aType.WATCH_LIST:
      return {
        ...state,
        watchlist: action.payload,
      };
    case aType.DISMISS:
      return {
        ...state,
        message: null,
      };
    case aType.ERROR: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case aType.LOGOUT:
      localStorage.clear();

      return {
        state,
        signature: null,
        message: null,
        profiles: null,
        choice: null,
      };
    default:
      return state;
  }
};

export default reducer;
