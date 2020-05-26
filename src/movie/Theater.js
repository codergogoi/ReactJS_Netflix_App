import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Context as UserContext } from "../context/UserContext";
import { imgDir } from "../utils/plugins";

import ProfileSelection from "../movie/ProfileSeection";
import Movies from "../movie/Movies";
import Watch from "../movie/Watch";

const Theater = () => {
  const { state, onSetChoice, onGetChoice } = useContext(UserContext);
  const { choice, signature } = state;

  const didSelectProifle = (profile) => {
    onSetChoice({ choice: profile.choice });
  };

  useEffect(() => {
    onGetChoice();
  }, []);

  if (choice === null) {
    return <ProfileSelection didSelectProifle={didSelectProifle} />;
  } else {
    return <Movies />;
  }
};

export default Theater;
