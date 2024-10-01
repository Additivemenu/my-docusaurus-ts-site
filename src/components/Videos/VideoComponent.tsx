import React from "react";

interface VideoComponentProps {
  src: string;
  width?: string;
  height?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  src,
  width = "100%",
  height = "auto",
}) => (
  <video width={width} height={height} controls>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoComponent;
