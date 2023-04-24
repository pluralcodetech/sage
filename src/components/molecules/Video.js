import React from "react";
import playimg from "../../images/Group 2.png";

// import { useState } from "react";
import Image from "../atom/Image";

const Video = () => {
  const videoWrapper = document.querySelector(".video");
  const wrapper = document.querySelector(".wrapper");
  const video = document.querySelector("#video1");
  console.log(video);
  const handlePlay = () => {
    video.play();
    videoWrapper.style.display = "block";
    wrapper.style.background = "#FFFDFA";
  };

  // getPlay.addEventListener("click", handlePlay)

  const handleClose = () => {
    video.pause();
    video.currentTime = 0;
    videoWrapper.style.display = "none";
    wrapper.style.background = "inherit";
  };

  return (
    <div className="wrapper">
      <button
        className=" ex fs-3 btn position-absolute p-lg-5 top-0 text-black"
        onClick={handleClose}
      >
        x
      </button>
      <div className="playimg" id="play" onClick={handlePlay}>
        <Image src={playimg} alt="" />
      </div>
      <div className="video">
        <video width="100%" height="800px" id="video1" controls>
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
  );
};

export default Video;
