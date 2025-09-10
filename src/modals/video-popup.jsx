import React from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId,
}) => {
  return (
    <>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isVideoOpen}
        url={videoId}
        allowFullScreen={true}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
