import React from "react";
import MemeFormContainer from "./MemeFormContainer";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/1ur9b0.jpg",
      allMemeImgs: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) =>
        this.setState((prevState) => {
          const { memes } = response.data;
          return {
            ...prevState,
            allMemeImgs: memes,
          };
        })
      );
  }

  render() {
    return (
      <div>
        <MemeFormContainer {...this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default MemeGenerator;
