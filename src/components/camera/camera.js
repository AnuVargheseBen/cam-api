import React, { useRef } from "react";
import useUserMedia from "../camera/userMedia";

function Camera({ audio, videoConstraints,ref }) {
  const videoRef = useRef();
  const mediaStream = useUserMedia({ audio, video: videoConstraints });

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  const getScreenshot =()=> {
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(videoRef.current, 0, 0, width, height);
      return canvas.toDataURL("image/png");
    }else{
      throw new Error('Nothing in video stream')
    }
   
  }

  // ref.getScreenshot=getScreenshot;

 console.log({ref})

  return (
    <div>
      <video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
      />
    </div>
  );
}

export default Camera;
