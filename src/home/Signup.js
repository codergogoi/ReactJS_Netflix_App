import React, { useEffect, useState, useContext } from "react";
import { Container, Image, Row, Col, Button, Form } from "react-bootstrap";
import { Context as UserContext } from "../context/UserContext";
import { useCookies } from "react-cookie";
import { imgDir } from "../utils/plugins";

const Signup = ({ isSignup, prevEmail, onForceSignIn }) => {
  const { state, onSignup, onSignin, onDismiss } = useContext(UserContext);
  const { signature, message } = state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookies, setCookie] = useCookies("signature");

  useEffect(() => {
    onDismiss();
    setEmail(prevEmail);
    if (signature !== null) {
      setCookie("signature", signature, { path: "/" });
    }
  }, [signature]);

  const didSignup = () => {
    onSignup({ email, password, firstName, lastName });
  };

  const didSignin = () => {
    onSignin({ email, password });
  };

  return (
    <div>
      <Row
        style={{
          display: "flex",
          height: "70em",
          backgroundRepeat: "norepeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${process.env.PUBLIC_URL}/bg_img.jpg)`,
          padding: 0,
        }}
      >
        <Col
          style={{
            display: "flex",
            backgroundColor: "rgba(0,0,0,0.6)",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Row>
            <Col>
              <Image src={imgDir("netflix_logo.png")} width="30%" />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: "5%",
              }}
            ></Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
            }}
          >
            <Col
              xs={3}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(0,0,0,0.7)",
                height: 600,
                paddingLeft: 80,
                paddingRight: 80,
              }}
            >
              <h1
                style={{
                  color: "#FFFFFF",
                  fontWeight: "600",
                  fontSize: "2.5em",
                  marginTop: 50,
                }}
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </h1>
              <Form.Control
                type="email"
                placeholder="Email address"
                autoComplete="none"
                color={"#FFF"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={{
                  border: "none",
                  backgroundColor: "#333",
                  marginTop: 20,
                  height: 60,
                }}
              />
              <Form.Control
                type="password"
                autoComplete="none"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{
                  border: "none",
                  backgroundColor: "#333",
                  marginTop: 20,
                  height: 60,
                }}
              />
              {isSignup && (
                <div>
                  <Form.Control
                    type="text"
                    autoComplete="none"
                    placeholder="First Name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    style={{
                      border: "none",
                      backgroundColor: "#333",
                      marginTop: 20,
                      height: 60,
                    }}
                  />
                  <Form.Control
                    type="text"
                    autoComplete="none"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    style={{
                      border: "none",
                      backgroundColor: "#333",
                      marginTop: 20,
                      height: 60,
                    }}
                  />
                </div>
              )}

              {message ? (
                <div>
                  <p style={{ color: "red", fontSize: "1.2em" }}>{message}</p>
                  <Button
                    style={{
                      height: 60,
                      width: 320,
                      backgroundColor: "#e50914",
                      border: "none",
                      marginTop: 50,
                    }}
                    onClick={onForceSignIn}
                  >
                    "Back To Sign In"
                  </Button>
                </div>
              ) : (
                <Button
                  style={{
                    height: 60,
                    backgroundColor: "#e50914",
                    border: "none",
                    width: 320,
                    marginTop: 50,
                  }}
                  onClick={isSignup ? didSignup : didSignin}
                >
                  {isSignup ? "Sign Up" : "Sign In"}
                </Button>
              )}
            </Col>
          </Row>
          <Row
            style={{
              height: 300,
              backgroundColor: "rgba(0,0,0,0.7)",
              marginTop: 100,
            }}
          ></Row>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
