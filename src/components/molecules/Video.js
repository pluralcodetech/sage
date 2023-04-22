import React from "react";
import playimg from "../../images/Group 2.png";
import ReactPlayer from "react-player/lazy";
import { useState } from "react";

const Video = () => {
  const [play, setPlay] = useState("true");

  const handleVideo = (e) => {
    let getDiv = document.querySelector(".wrapper");
    let close = document.querySelector(".ex");
    close.style.display = "block";
    if (getDiv.className === "wrapper") {
      getDiv.className += " vid";
    }
  };

  const handleClose = (e) => {
    // let getDiv = document.querySelector(".wrapper");
    // e.target.style.display = "none";
    // if (getDiv.className === "wrapper vid") {
    //   getDiv.className = "wrapper";
    // }
    setPlay(false);
  };

  return (
    <div className="wrapper">
      <div className="remove">
        <button
          className=" ex fs-3 btn position-absolute p-lg-5 top-0 text-black"
          onClick={handleClose}
        >
          x
        </button>
        {/* {let a = document.querySelector("")} */}
        <ReactPlayer
          url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          controls={true}
          light={<img src={playimg} alt="Thumbnail" className="play" />}
          width="80%"
          height="100%"
          className="react-player"
          playing={play}
          playIcon
          onReady={handleVideo}
        />
      </div>
    </div>
  );
};

export default Video;
