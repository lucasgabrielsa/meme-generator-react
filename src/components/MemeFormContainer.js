import React from "react";

function MemeFormContainer(props) {
  return (
    <div>
      <form className="meme-form">
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          value={props.topText}
          onChange={props.handleChange}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          value={props.bottomText}
          onChange={props.handleChange}
        />
        <button onClick={props.handleGenerate}>Generate</button>
      </form>
    </div>
  );
}

export default MemeFormContainer;
