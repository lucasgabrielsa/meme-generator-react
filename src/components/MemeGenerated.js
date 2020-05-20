import React from "react";

function MemeGenerated(props) {
  return (
    <div className="meme">
      <img src={props.isLoading ? "./loading.gif" : props.randomImage} />
      <h2 className="top">{props.topText}</h2>
      <h2 className="bottom">{props.bottomText}</h2>
    </div>
  );
}

export default MemeGenerated;
