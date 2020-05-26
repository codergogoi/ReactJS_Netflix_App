import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Context as UserContext } from "../context/UserContext";
import { imgDir, urlImage, movieUrl } from "../utils/plugins";

const Watch = (props) => {
  const { state, onSetChoice, onGetChoice } = useContext(UserContext);
  const { choice, signature } = state;
  const [isLoading, setIsLoading] = useState(false);
  const { _id, poster } = props.movie;

  const url = movieUrl(_id);

  console.log(url);

  useEffect(() => {
    console.log(`Call Watch Video ${_id}`);
  }, []);

  const onLoadedVideo = () => {
    setIsLoading(true);
  };

  const onBackToMoviesList = () => {
    props.onTapBack();
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#000000",
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundRepeat: "norepeat",
        backgroundSize: "cover",
        backgroundImage: !isLoading && `url(${urlImage(poster)}`,
        height: window.innerHeight,
      }}
    >
      <Image
        style={{
          position: "absolute",
          height: 50,
          width: 50,
          top: "5%",
          left: "5%",
          zIndex: 100,
          outline: "none",
        }}
        onClick={onBackToMoviesList}
        src={imgDir("back_arrow.png")}
        width="50"
        height="50"
      />
      <video
        onLoadedData={onLoadedVideo}
        width={window.innerWidth}
        height={window.innerHeight}
        controls
        autoPlay={true}
        disablePictureInPicture
        controlsList="nodownload"
        style={{ opacity: isLoading ? 1 : 0 }}
      >
        <source src={url} type="video/mp4" />
      </video>
    </Container>
  );
};

export default Watch;
