import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Context as UserContext } from "../context/UserContext";
import ProfileSelection from "../movie/ProfileSeection";
import { imgDir } from "../utils/plugins";

const Series = () => {
  const { state, onViewProfiles } = useContext(UserContext);

  useEffect(() => {
    onViewProfiles();
  }, []);

  const { profiles } = state;

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#141414",
        display: "flex",
        height: window.innerHeight,
        flexDirection: "column",
      }}
    >
      <Row
        style={{
          display: "flex",
          flex: 2,
          justifyContent: "flex-start",
        }}
      >
        <Col>
          <Image src={imgDir("netflix_logo.png")} width="8%" />
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          flex: 8,
        }}
      >
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#FFFFFF",
                fontWeight: "600",
                fontSize: "3em",
                textAlign: "center",
              }}
            >
              Who's Watching?
            </h1>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {profiles !== null &&
            profiles.map((profile, key) => {
              return (
                <li
                  style={{
                    display: "flex",
                    height: 300,
                    width: 250,
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: 20,
                  }}
                  key={key}
                >
                  <Image
                    src={
                      profile.category === "Adult"
                        ? imgDir("adult.png")
                        : imgDir("kids.png")
                    }
                    width="180"
                    height="180"
                  />
                  <h4
                    style={{
                      fontSize: "1.7em",
                      fontWeight: "300",
                      color: "#A2A2A2",
                      marginTop: 20,
                    }}
                  >
                    {profile.title}
                  </h4>
                </li>
              );
            })}
          <li
            onClick={() => alert("hello")}
            style={{
              display: "flex",
              height: 300,
              width: 250,
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              margin: 20,
            }}
          >
            <Image src={imgDir("add_profile.png")} width="100" height="100" />
            <h4
              style={{
                fontSize: "1.6em",
                fontWeight: "300",
                color: "#A2A2A2",
                marginTop: 20,
              }}
            >
              Add Profile
            </h4>
          </li>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <button
            style={{
              backgroundColor: "#141414",
              display: "flex",
              border: "1.5px solid #A2A2A2",
              height: 60,
              width: 400,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                fontSize: "1.6em",
                fontWeight: "300",
                color: "#A2A2A2",
              }}
            >
              MANAGE PROFILES
            </h4>
          </button>
        </Row>
      </Row>
      <Row
        style={{
          display: "flex",
          flex: 2,
        }}
      ></Row>
    </Container>
  );
};

export default Series;
