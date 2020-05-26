import React, { useEffect, useState, useContext } from "react";
import { Container, Image, Row, Col, Button, Form } from "react-bootstrap";
import { Context as UserContext } from "../context/UserContext";
import { useCookies } from "react-cookie";
import { imgDir } from "../utils/plugins";

const SignIn = () => {
  const { state, onSignin } = useContext(UserContext);
  const { signature } = state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies("signature");

  useEffect(() => {
    if (signature !== null) {
      setCookies("signature", signature, { path: "/" });
    }
  }, [signature]);

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
                Sign In
              </h1>
              <Form.Control
                type="email"
                placeholder="Email address"
                autoComplete="none"
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
              <Button
                style={{
                  height: 60,
                  backgroundColor: "#e50914",
                  border: "none",
                  marginTop: 50,
                }}
                onClick={didSignin}
              >
                Sign In
              </Button>
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

export default SignIn;
