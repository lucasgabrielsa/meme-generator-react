import React from "react";
import MemeFormContainer from "./MemeFormContainer";
import MemeGenerated from "./MemeGenerated";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "",
      allMemeImgs: [],
      isLoading: true,
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  handleGenerate = (event) => {
    const randomIndex = Math.floor(
      Math.random() * this.state.allMemeImgs.length
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        randomImage: prevState.allMemeImgs[randomIndex].url,
      };
    });
    event.preventDefault();
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) =>
        this.setState((prevState) => {
          const { memes } = response.data;
          const randomIndex = Math.floor(Math.random() * memes.length);
          return {
            ...prevState,
            allMemeImgs: memes,
            randomImage: memes[randomIndex].url,
            isLoading: false,
          };
        })
      );
  }

  render() {
    return (
      <div>
        <MemeFormContainer
          {...this.state}
          handleChange={this.handleChange}
          handleGenerate={this.handleGenerate}
        />
        <MemeGenerated {...this.state} />
      </div>
    );
  }
}

export default MemeGenerator;
