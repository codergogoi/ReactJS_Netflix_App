import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Image, Form } from "react-bootstrap";
import { Context as UserContext } from "../context/UserContext";
import { imgDir } from "../utils/plugins";

const ProfileSelection = (props) => {
  const { state, onViewProfiles, onAddChoiceToProfile } = useContext(
    UserContext
  );
  const [isAddChoice, setIsAddChoice] = useState(false);
  const [addProfile, setAddProfile] = useState(false);
  const [profileId, setProfileId] = useState("");
  const [profileName, setProfileName] = useState("");

  const availableChoice = [
    "Adventure",
    "Comedy",
    "Sci-Fi",
    "Thriller",
    "Fantasy",
    "Romantic",
    "History",
  ];

  const [selectedChoice, setSelectedChoice] = useState([]);

  const { profiles } = state;

  useEffect(() => {
    onViewProfiles();
  }, []);

  const onTapSelectProfile = (profile) => {
    const { _id, choice } = profile;
    setProfileId(_id);
    if (choice === null) {
      setIsAddChoice(true);
    } else {
      setIsAddChoice(false);
      props.didSelectProifle(profile);
    }
  };

  const onSubmitChoice = () => {
    if (addProfile) {
      onAddChoiceToProfile({ id: profileId, choice: selectedChoice });
    } else if (isAddChoice) {
      onAddChoiceToProfile({ id: profileId, choice: selectedChoice });
    }
  };

  const checkSelected = (item) => {
    return selectedChoice.includes(item);
  };

  const onTapAddProfile = () => {
    setAddProfile(true);
    setIsAddChoice(true);
  };

  const addChoiceToProfile = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {availableChoice.map((item, index) => {
          return (
            <li
              onClick={() => {
                setSelectedChoice([...selectedChoice, item]);
                console.log(selectedChoice);
              }}
              style={{
                display: "flex",
                height: 50,
                backgroundColor: checkSelected(item) ? "#FFF" : "#333333",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: 20,
                margin: 20,
              }}
              key={index}
            >
              <h4
                style={{
                  fontSize: "1.7em",
                  fontWeight: "500",
                  color: checkSelected(item) ? "green" : "#FFF",
                }}
              >
                {item}
              </h4>
            </li>
          );
        })}
      </div>
    );
  };

  const viewProfiles = () => {
    return (
      <div
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
                onClick={() => onTapSelectProfile(profile)}
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
          onClick={onTapAddProfile}
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
      </div>
    );
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#141414",
        display: "flex",
        height: window.innerHeight,
        flexDirection: "column",
        padding: 0,
        margin: 0,
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
              flexDirection: "column",
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
              {addProfile && isAddChoice
                ? "Add Profile Name & Selecte Your Choice"
                : isAddChoice
                ? "Select your Choice"
                : "Who's Watching?"}
            </h1>
            {addProfile && (
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  width: "300",
                  marginBottom: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Profile Name"
                  style={{ border: "none", height: 70, width: 300 }}
                  onChange={(e) => {
                    setProfileName(e.target.value);
                  }}
                />
              </div>
            )}
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {isAddChoice ? addChoiceToProfile() : viewProfiles()}
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {isAddChoice ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: 400,
              }}
            >
              <button
                onClick={() => {
                  setIsAddChoice(false);
                  setAddProfile(false);
                }}
                style={{
                  backgroundColor: "#141414",
                  display: "flex",
                  border: "1.5px solid #A2A2A2",
                  height: 60,
                  width: 200,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <h4
                  style={{
                    fontSize: "1.6em",
                    fontWeight: "300",
                    color: "#A2A2A2",
                  }}
                >
                  back
                </h4>
              </button>

              <button
                onClick={onSubmitChoice}
                style={{
                  backgroundColor: "#141414",
                  display: "flex",
                  border: "1.5px solid #A2A2A2",
                  height: 60,
                  width: 200,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <h4
                  style={{
                    fontSize: "1.6em",
                    fontWeight: "300",
                    color: "#A2A2A2",
                  }}
                >
                  Next
                </h4>
              </button>
            </div>
          ) : (
            <button
              onClick={onSubmitChoice}
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
                {isAddChoice ? "Next" : "MANAGE PROFILES"}
              </h4>
            </button>
          )}
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

export default ProfileSelection;
