import React, { useEffect, useState, useContext } from "react";
import { Context as UserContext } from "../context/UserContext";
import { useCookies } from "react-cookie";
import Theater from "../movie/Theater";
import Home from "../home/Home";

const Landing = () => {
  const { state, onCheckAuth } = useContext(UserContext);
  const { signature } = state;
  const [cookies, setCookie] = useCookies("signature");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    onCheckAuth();
  }, []);

  useEffect(() => {
    if (signature !== null) {
      setCookie(signature, { path: "/" });
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [signature]);

  if (authenticated) {
    return <Theater />;
  } else {
    return <Home />;
  }
};

const style = {};

export default Landing;
