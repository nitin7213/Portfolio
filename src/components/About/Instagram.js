import React, { useEffect } from "react";

const Instagram = ({ url }) => {
  useEffect(() => {
    // When the component mounts, load the Instagram embed script
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      // Clean up: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    // Redirect user to the Instagram post URL when clicked
    window.location.href = url;
  };

  return (
    <div
      className="instagram-embed"
      onClick={handleClick}
      style={{ position: "relative", zIndex: "999" }}
    >
      <style>{`
        .instagram-embed {
          cursor: pointer; /* Change cursor to pointer when hovering */
        }
      `}</style>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="13"
        style={{ maxWidth: "100%" }}
      >
        <a href={url}>.</a>
      </blockquote>
    </div>
  );
};

export default Instagram;
