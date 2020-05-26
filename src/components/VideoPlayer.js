import React, { useState, useEffect } from "react";
import axios from "axios";

const VideoPlayer = () => {
  //http://localhost:8000
  // const LiveURL = "https://limitless-beyond-35588.herokuapp.com";
  const LiveURL = "http://localhost:8000";

  const [show, setShow] = useState(Boolean);
  const [videos, setVideos] = useState([]);
  const [vid, setVid] = useState(null);

  useEffect(() => {
    axios
      .get(`${LiveURL}/watch/`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const showVideo = () => {
    return (
      <video width="1280" controls controlsList="nodownload">
        {vid && (
          <source
            src={`${LiveURL}/watch/movie/${vid}`}
            oncontextmenu="return false;"
            onCanPlay={true}
          />
        )}
      </video>
    );
  };

  return (
    <div>
      <div width="200" hight="400">
        Here {videos.length}
        {videos.map((item) => {
          return (
            <li style={{ height: 50 }}>
              <button
                onClick={() => {
                  setVid(item._id);
                }}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </div>
      {showVideo()}
    </div>
  );
};

export default VideoPlayer;
