import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
  width?: string;
  height?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = "560",
  height = "315",
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      width={width}
      height={height}
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeEmbed;