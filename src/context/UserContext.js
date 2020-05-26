import createAppContext from "./AppContext";
import api from "../utils/Api";
import aType from "../utils/ActionType";
import axios from "axios";

/**
 * Reducer
 */
import reducer from "./Reducer";

const configureAPI = ({ token }) => {
  axios.defaults.baseURL = "http://localhost:8000/";
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("authorization", token);
};

/**
 * Methods
 */

const onCheckAuth = (dispatch) => async () => {
  const signature = await localStorage.getItem("authorization");
  if (signature) {
    configureAPI({ token: signature });
    dispatch({ type: aType.CHECKAUTH, payload: signature });
  } else {
    dispatch({ type: aType.ERROR, payload: "Login Again" });
  }
};

const onSignin = (dispatch) => async ({ email, password }) => {
  api
    .post("user/login", {
      email,
      password,
    })
    .then((result) => {
      dispatch({ type: aType.LOGIN, payload: result.data });
      configureAPI({ token: result.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: aType.ERROR, payload: err });
    });
};

const onSignup = (dispatch) => async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  api
    .post("user/signup", {
      email,
      password,
      firstName,
      lastName,
    })
    .then((result) => {
      onSignin({ email, password });
    })
    .catch((err) => {
      dispatch({
        type: aType.ERROR,
        payload: err.response.data.message || "We are sorry for this err!",
      });
    });
};

const onViewProfiles = (dispatch) => () => {
  api
    .get("user/profile")
    .then((result) => {
      console.log(result);
      dispatch({ type: aType.PROFILE, payload: result.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: aType.ERROR, payload: err });
    });
};

const onSetChoice = (dispatch) => ({ choice }) => {
  console.log(`Choice is Set Here ${choice}`);
  localStorage.setItem("choice", JSON.stringify(choice));
  dispatch({ type: aType.SET_CHOICE, payload: choice });
};

const onAddChoiceToProfile = (dispatch) => ({ id, choice }) => {
  api
    .put("user/profile/" + id, { choice: choice })
    .then((result) => {
      dispatch({ type: aType.PROFILE, payload: result.data });
    })
    .catch((err) => {
      dispatch({ type: aType.ERROR, payload: err });
    });

  dispatch({ type: aType.SET_CHOICE, payload: choice });
};

const onGetChoice = (dispatch) => () => {
  const choice = localStorage.getItem("choice");
  if (choice !== undefined) {
    dispatch({ type: aType.SET_CHOICE, payload: choice });
  }
};

const onDismiss = (dispatch) => async () => {
  dispatch({ type: aType.DISMISS });
};

const onLogout = (dispatch) => () => {
  dispatch({ type: aType.LOGOUT });
};

const onFindAllMovies = (dispatch) => () => {
  api
    .get("watch/movie")
    .then((result) => {
      console.log(result);
      dispatch({ type: aType.ALL_MOVIES, payload: result.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: aType.ERROR, payload: err });
    });
};

const onViewWatchList = (dispatch) => () => {
  api
    .get("user/watch-list")
    .then((result) => {
      console.log(result);
      dispatch({ type: aType.WATCH_LIST, payload: result.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: aType.ERROR, payload: err });
    });
};

const onAddToWatchList = (dispatch) => ({ _id }) => {
  api
    .put(`user/watch-list/${_id}`)
    .then((result) => {
      dispatch({ type: aType.WATCH_LIST, payload: result.data });
    })
    .catch((err) => {
      dispatch({ type: aType.ERROR, payload: err });
    });
};

const onRemoveFromWatchList = (dispatch) => ({ _id }) => {
  api
    .delete(`user/watch-list/${_id}`)
    .then((result) => {
      dispatch({ type: aType.WATCH_LIST, payload: result.data });
    })
    .catch((err) => {
      dispatch({ type: aType.ERROR, payload: err });
    });
};

export const { Provider, Context } = createAppContext(
  reducer,
  {
    onCheckAuth,
    onSignin,
    onDismiss,
    onViewProfiles,
    onSetChoice,
    onLogout,
    onFindAllMovies,
    onViewWatchList,
    onGetChoice,
    onSignup,
    onAddChoiceToProfile,
    onAddToWatchList,
    onRemoveFromWatchList,
  },
  {
    signature: null,
    message: null,
    profiles: null,
    choice: null,
  }
);
