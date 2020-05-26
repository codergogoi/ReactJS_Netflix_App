import React, { useEffect, useState, useContext, useRef } from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Button,
  Form,
  Accordion,
  Card,
} from "react-bootstrap";
import { Context as UserContext } from "../context/UserContext";
import { useCookies } from "react-cookie";
import { imgDir } from "../utils/plugins";
import SignUpSignIn from "../home/Signup";

const Landing = () => {
  const { state, onCheckAuth, onDismiss } = useContext(UserContext);

  const emailRef = useRef("email");

  const { signature } = state;

  const [login, setLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies("signature");
  const [watchNow, setWatchNow] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    onCheckAuth();
  }, []);

  useEffect(() => {
    if (signature !== null) {
      setWatchNow(true);
      setCookie(signature, { path: "/" });
    } else {
      setWatchNow(false);
    }
  }, [signature]);

  const checkSignup = () => {
    if (email.length > 0 && email !== undefined) {
      setIsSignup(true);
      setLogin(true);
    } else {
      emailRef.current.focus();
      setShowWarning(true);
    }
  };

  const doSignIn = () => {
    setIsSignup(false);
    setLogin(true);
    onDismiss();
  };

  const homePageTopSection = () => {
    return (
      <Row
        style={{
          display: "flex",
          height: "40em",
          backgroundRepeat: "norepeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${process.env.PUBLIC_URL}/bg_img.jpg)`,
          borderBottom: "10px solid #333333",
          padding: 0,
        }}
      >
        <Col
          style={{
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
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
            >
              <Button
                style={{
                  width: 130,
                  height: 40,
                  backgroundColor: "#e50914",
                  border: "none",
                }}
                onClick={() => {
                  setIsSignup(false);
                  setLogin(true);
                }}
              >
                Sign In
              </Button>
            </Col>
          </Row>

          {/* signup content */}

          <Row>
            <Col
              style={{
                marginTop: 50,
                display: "flex",
                flex: 1,
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
                  marginLeft: "30%",
                  marginRight: "30%",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Unlimited Movies and TV Shows and more
              </h1>
              <h2
                style={{
                  color: "#FFFFFF",
                  fontWeight: "500",
                  fontSize: "2em",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Watch anywhere. Cancel anytime
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-arround",
                  alignItems: "center",
                  height: 70,
                  minWidth: 300,
                  width: "45%",
                  backgroundColor: "#FFFFFF",
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    flex: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    style={{ border: "none", height: 70 }}
                    onChange={(e) => {
                      setShowWarning(false);
                      setEmail(e.target.value);
                    }}
                    ref={emailRef}
                  />
                </div>

                <Button
                  style={{
                    flex: 4,
                    height: "100%",
                    backgroundColor: "#e50914",
                    border: "none",
                    borderRadius: 0,
                    fontSize: "2.0em",
                  }}
                  onClick={checkSignup}
                >
                  Try IT NOW ˃
                </Button>
              </div>

              <h2
                style={{
                  color: "#FFFFFF",
                  fontWeight: "500",
                  fontSize: "1.2em",
                  textAlign: "left",
                  marginTop: 10,
                }}
              >
                {showWarning && (
                  <p
                    style={{
                      fontSize: "0.9em",
                      color: "#FFA00A",
                      alignSelf: "flex-start",
                    }}
                  >
                    Email is required
                  </p>
                )}
                Ready to watch? Enter your email id to Create or access your
                account.
              </h2>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };

  const bottomPageSection = () => {
    return (
      <div>
        {/* tv contents  */}
        <Row
          style={{
            height: 480,
            backgroundColor: "#000000",
            borderBottom: "10px solid #333333",
            padding: 0,
          }}
        >
          <Col
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div style={{ width: 480 }}>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontWeight: "600",
                  fontSize: "2.5em",
                  textAlign: "left",
                  marginTop: 20,
                }}
              >
                Enjoy your TV
              </h1>
              <h2
                style={{
                  color: "#FFFFFF",
                  fontWeight: "500",
                  fontSize: "2em",
                  marginTop: 20,
                }}
              >
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h2>
            </div>
          </Col>
          <Col
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div style={{ width: 480 }}>
              <Image src={imgDir("tv.png")} width="480" />
            </div>
          </Col>
        </Row>
        {/* mobile contents */}
        <Row
          style={{
            height: 480,
            backgroundColor: "#000000",
            borderBottom: "10px solid #333333",
            padding: 0,
          }}
        >
          <Col
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div style={{ width: 480 }}>
              <Image src={imgDir("mobile_content.png")} width="480" />
            </div>
          </Col>
          <Col
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div style={{ width: 480 }}>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontWeight: "600",
                  fontSize: "2.5em",
                  textAlign: "left",
                  marginTop: 20,
                }}
              >
                Enjoy your TV
              </h1>
              <h2
                style={{
                  color: "#FFFFFF",
                  fontWeight: "500",
                  fontSize: "2em",
                  marginTop: 20,
                }}
              >
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h2>
            </div>
          </Col>
        </Row>
        {/* device contents */}
        <Row
          style={{
            height: 480,
            backgroundColor: "#000000",
            borderBottom: "10px solid #333333",
            padding: 0,
          }}
        >
          <Col
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div style={{ width: 480 }}>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontWeight: "600",
                  fontSize: "2.5em",
                  textAlign: "left",
                  marginTop: 20,
                }}
              >
                Enjoy your TV
              </h1>
              <h2
                style={{
                  color: "#FFFFFF",
                  fontWeight: "500",
                  fontSize: "2em",
                  marginTop: 20,
                }}
              >
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h2>
            </div>
          </Col>
          <Col
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div style={{ width: 480 }}>
              <Image src={imgDir("device_content.png")} width="480" />
            </div>
          </Col>
        </Row>
        {/* frequently Asked questions */}
        <Row
          style={{
            backgroundColor: "#000000",
            borderBottom: "10px solid #333333",
            padding: 0,
            justifyContent: "center",
            display: "flex",
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <Col
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Accordion>
              <div style={{ width: 800, backgroundColor: "#333333" }}>
                <Card.Header style={{ textDecoration: "none" }}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <label
                      style={{
                        color: "#FFF",
                        fontSize: "1.8em",
                      }}
                    >
                      What is Netflix?
                    </label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p style={{ color: "#FFF", fontSize: "1.5em" }}>
                      Netflix is a streaming service that offers a wide variety
                      of award-winning TV shows, movies, anime, documentaries
                      and more – on thousands of internet-connected devices.
                      <br></br>You can watch as much as you want, whenever you
                      want, without a single ad – all for one low monthly price.
                      There's always something new to discover, and new TV shows
                      and movies are added every week!
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>

              <div style={{ width: 800, backgroundColor: "#333333" }}>
                <Card.Header style={{ textDecoration: "none" }}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <label style={{ color: "#FFF", fontSize: "1.8em" }}>
                      How much does Netflix cost?
                    </label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p style={{ color: "#FFF", fontSize: "1.5em" }}>
                      Watch Netflix on your smartphone, tablet, Smart TV,
                      laptop, or streaming device, all for one fixed monthly
                      fee. Plans range from ₹&nbsp;199 to ₹&nbsp;799 a month. No
                      extra costs, no contracts.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>

              <div style={{ width: 800, backgroundColor: "#333333" }}>
                <Card.Header style={{ textDecoration: "none" }}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <label style={{ color: "#FFF", fontSize: "1.8em" }}>
                      Where can I watch?
                    </label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p style={{ color: "#FFF", fontSize: "1.5em" }}>
                      Watch anywhere, anytime, on an unlimited number of
                      devices. Sign in with your Netflix account to watch
                      instantly on the web at netflix.com from your personal
                      computer or on any internet-connected device that offers
                      the Netflix app, including smart TVs, smartphones,
                      tablets, streaming media players and game consoles.
                      <br></br>You can also download your favourite shows with
                      the iOS, Android, or Windows 10 app. Use downloads to
                      watch while you're on the go and without an internet
                      connection. Take Netflix with you anywhere.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>

              <div style={{ width: 800, backgroundColor: "#333333" }}>
                <Card.Header style={{ textDecoration: "none" }}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <label style={{ color: "#FFF", fontSize: "1.8em" }}>
                      How do I cancel?
                    </label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p style={{ color: "#FFF", fontSize: "1.5em" }}>
                      Netflix is flexible. There are no annoying contracts and
                      no commitments. You can easily cancel your account online
                      in two clicks. There are no cancellation fees – start or
                      stop your account anytime.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>

              <div style={{ width: 800, backgroundColor: "#333333" }}>
                <Card.Header style={{ textDecoration: "none" }}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    <label style={{ color: "#FFF", fontSize: "1.8em" }}>
                      What can I watch on Netflix?
                    </label>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p style={{ color: "#FFF", fontSize: "1.5em" }}>
                      Netflix has an extensive library of feature films,
                      documentaries, TV shows, anime, award-winning Netflix
                      originals, and more. Watch as much as you want, anytime
                      you want.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Accordion>
          </Col>
          <Col
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          ></Col>
        </Row>
      </div>
    );
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#141414",
      }}
    >
      <div>
        <Row
          style={{
            display: "flex",
            height: "40em",
            backgroundRepeat: "norepeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${process.env.PUBLIC_URL}/bg_img.jpg)`,
            borderBottom: "10px solid #333333",
            padding: 0,
          }}
        >
          <Col
            style={{
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          >
            {login ? (
              <SignUpSignIn
                onForceSignIn={doSignIn}
                prevEmail={email}
                isSignup={isSignup}
              />
            ) : (
              homePageTopSection()
            )}
          </Col>
        </Row>
        {/* top content end */}
        {!login && bottomPageSection()}
      </div>
    </Container>
  );
};

const style = {};

export default Landing;
