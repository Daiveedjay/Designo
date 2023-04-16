import "./EmbeddedMap.scss";
import { useState } from "react";

// EmbeddedMap component
const EmbeddedMap = ({ url, imgSrc }) => {
  // Create a state to handle load error
  const [loadError, setLoadError] = useState(false);

  // Function to handle iframe load error
  const handleLoadError = () => {
    setLoadError(true);
  };

  return (
    <>
      {loadError ? (
        // If there's an error loading the iframe, display the default map image
        <img className="default-map" src={imgSrc} alt="Map" />
      ) : (
        // Otherwise, display the iframe with the embedded map
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src={url}
          title="Embedded Map"
          loading="lazy"
          onError={handleLoadError}
        ></iframe>
      )}
    </>
  );
};

export default EmbeddedMap;
