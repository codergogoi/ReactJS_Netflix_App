import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Context as UserContext } from "../context/UserContext";
import { Navbar, Nav } from "react-bootstrap";
import ProfileSelection from "../movie/ProfileSeection";
import { imgDir, urlImage } from "../utils/plugins";
import Watch from "../movie/Watch";

const Movies = () => {
  const {
    state,
    onLogout,
    onFindAllMovies,
    onViewWatchList,
    onAddToWatchList,
    onRemoveFromWatchList,
  } = useContext(UserContext);
  const { movies, watchlist } = state;

  const [startPlay, setStartPlay] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    onViewWatchList();
    onFindAllMovies();
  }, []);

  const didLogout = () => {
    onLogout();
  };

  const onTapPlay = (movie) => {
    setCurrentMovie(movie);
    setStartPlay(true);
  };

  const onTapBack = () => {
    setStartPlay(false);
  };

  const addToWatchList = (item) => {
    onAddToWatchList(item);
  };

  const removeFromWatchList = (item) => {
    onRemoveFromWatchList(item);
  };

  const listOfMovies = () => {
    return (
      <Container
        fluid
        style={{
          backgroundColor: "#141414",
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
      >
        <Row
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-start",
            flexDirection: "column",
            backgroundRepeat: "norepeat",
            backgroundSize: "cover",
            backgroundImage:
              movies !== undefined && `url(${urlImage(movies[0].poster)}`,
            margin: 0,
            padding: 0,
          }}
        >
          <Col
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-start",
              flexDirection: "row",
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0) , rgba(0,0,0,0.7))",
              margin: 0,
            }}
          >
            <Navbar
              sticky="top"
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <Navbar.Brand
                href="#home"
                style={{ width: 200, paddingLeft: 50 }}
              >
                <Image src={imgDir("netflix_logo.png")} width="150" />
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link
                  href="#home"
                  style={{ fontWeight: "600", color: "#fff" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#tvshow"
                  style={{ fontWeight: "400", color: "#fff" }}
                >
                  TV Shows
                </Nav.Link>
                <Nav.Link
                  href="#movies"
                  style={{ fontWeight: "400", color: "#fff" }}
                >
                  Movies
                </Nav.Link>
                <Nav.Link
                  href="#latest"
                  style={{ fontWeight: "400", color: "#fff" }}
                >
                  Latest
                </Nav.Link>
                <Nav.Link
                  href="#mylist"
                  style={{ fontWeight: "400", color: "#fff" }}
                >
                  My List
                </Nav.Link>
              </Nav>
              <Nav style={{ paddingRight: 20 }}>
                <Nav.Link
                  onClick={didLogout}
                  eventKey={2}
                  style={{ fontWeight: "700", color: "#fff" }}
                >
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>

          {/* poster and Other contents */}
          <Col
            style={{
              padding: "0px",
              display: "flex",
              flex: 11,
              flexDirection: "column",
              backgroundImage:
                "linear-gradient(-130deg,rgba(0,0,0,0),rgba(0,0,0,0.1))",
            }}
          >
            <Row
              style={{
                height: 800,
                margin: 0,
                padding: 0,
              }}
            >
              {movies !== undefined && (
                <Col
                  xs={5}
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                      paddingLeft: 50,
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "7.0em",
                        color: "#FFF",
                        fontWeight: "800",
                      }}
                    >
                      {movies[0].title}
                    </h1>
                    <h2 style={{ fontSize: "2.0em", color: "#FFF" }}>
                      {movies[0].plot}
                    </h2>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 50,
                      }}
                    >
                      <button
                        style={{
                          height: 50,
                          width: 140,
                          backgroundColor: "#FFF",
                          border: 0,
                          borderRadius: 5,
                          margin: 10,
                          fontSize: "1.5em",
                          fontWeight: "400",
                          color: "#000000",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          outline: "none",
                        }}
                        onClick={() => onTapPlay(movies[0])}
                      >
                        <Image
                          src={imgDir("play.png")}
                          width="50"
                          height="50"
                        />
                        Play
                      </button>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 50,
                          width: 180,
                          backgroundColor: "#757373",
                          border: 0,
                          borderRadius: 5,
                          margin: 10,
                          fontSize: "1.5em",
                          fontWeight: "400",
                          color: "#FFF",
                        }}
                      >
                        <Image
                          src={imgDir("info.png")}
                          width="30"
                          height="30"
                          style={{ marginRight: 20 }}
                        />
                        More Info
                      </button>
                    </div>
                  </div>
                </Col>
              )}

              <Col></Col>
            </Row>

            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.9)",
                backgroundImage:
                  "linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,1))",
              }}
            >
              {/* if Watch List available  */}

              {watchlist !== undefined && watchlist.length > 0 && (
                <Row
                  style={{
                    height: 250,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: 50,
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  <h2 style={{ fontSize: "2.0em", color: "#FFF" }}>
                    Watch List
                  </h2>

                  <Col
                    style={{
                      flex: 1,
                      display: "flex",
                      height: 150,
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    {watchlist !== undefined &&
                      watchlist.map((item) => {
                        return (
                          <div
                            style={{
                              width: "320px",
                              height: "100%",
                              marginRight: 5,
                              backgroundImage: `url(${urlImage(
                                item.thumbnail
                              )}`,
                              backgroundRepeat: "norepeat",
                              backgroundSize: "cover",
                              display: "flex",
                              justifyContent: "space-around",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                            key={item._id}
                          >
                            <button
                              onClick={() => onTapPlay(item)}
                              style={{
                                flex: 1,
                                display: "flex",
                                backgroundColor: "rgba(0,0,0,0)",
                                border: "none",
                                height: "100%",
                                width: "100%",
                              }}
                            ></button>
                            <div>
                              <button
                                style={{
                                  height: 50,
                                  width: 50,
                                  borderRadius: 25,
                                  backgroundColor: "rgba(255,255,255,0.5)",
                                  alignSelf: "flex-end",
                                }}
                                onClick={() => removeFromWatchList(item)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        );
                      })}
                  </Col>
                </Row>
              )}

              {/* Trending  */}
              <Row
                style={{
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: 50,
                  marginBottom: 20,
                }}
              >
                <h2 style={{ fontSize: "2.0em", color: "#FFF" }}>
                  Trending Now
                </h2>

                <Col
                  style={{
                    flex: 1,
                    display: "flex",
                    height: 200,
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {movies !== undefined &&
                    movies
                      .filter((item) => {
                        return item.videoType === "movie";
                      })
                      .map((item) => {
                        return (
                          <div
                            style={{
                              width: "320px",
                              height: "100%",
                              marginRight: 5,
                              backgroundImage: `url(${urlImage(
                                item.thumbnail
                              )}`,
                              backgroundRepeat: "norepeat",
                              backgroundSize: "cover",
                              display: "flex",
                              justifyContent: "space-around",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                            key={item._id}
                          >
                            <button
                              onClick={() => onTapPlay(item)}
                              style={{
                                flex: 1,
                                display: "flex",
                                backgroundColor: "rgba(0,0,0,0)",
                                border: "none",
                                height: "100%",
                                width: "100%",
                              }}
                            ></button>
                            <div>
                              <button
                                style={{
                                  height: 50,
                                  width: 50,
                                  borderRadius: 25,
                                  backgroundColor: "rgba(255,255,255,0.5)",
                                  alignSelf: "flex-end",
                                }}
                                onClick={() => addToWatchList(item)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                </Col>
              </Row>

              {/* TV Series  */}
              <Row
                style={{
                  height: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: 50,
                  marginBottom: 20,
                }}
              >
                <h2 style={{ fontSize: "2.0em", color: "#FFF" }}>TV Series</h2>

                <Col
                  style={{
                    flex: 1,
                    display: "flex",
                    height: 150,
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {movies !== undefined &&
                    movies
                      .filter((item) => {
                        return item.videoType === "series";
                      })
                      .map((item) => {
                        return (
                          <div
                            style={{
                              width: "320px",
                              height: "100%",
                              marginRight: 5,
                              backgroundImage: `url(${urlImage(
                                item.thumbnail
                              )}`,
                              backgroundRepeat: "norepeat",
                              backgroundSize: "cover",
                              display: "flex",
                              justifyContent: "space-around",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                            key={item._id}
                          >
                            <button
                              onClick={() => onTapPlay(item)}
                              style={{
                                flex: 1,
                                display: "flex",
                                backgroundColor: "rgba(0,0,0,0)",
                                border: "none",
                                height: "100%",
                                width: "100%",
                              }}
                            ></button>
                            <div>
                              <button
                                style={{
                                  height: 50,
                                  width: 50,
                                  borderRadius: 25,
                                  backgroundColor: "rgba(255,255,255,0.5)",
                                  alignSelf: "flex-end",
                                }}
                                onClick={() => addToWatchList(item)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  const watchCurrentMovie = () => {
    return <Watch movie={currentMovie} onTapBack={onTapBack} />;
  };

  if (startPlay && currentMovie !== null) {
    return watchCurrentMovie();
  } else {
    return listOfMovies();
  }
};

export default Movies;
