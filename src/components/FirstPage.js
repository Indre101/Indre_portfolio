import React, { Component } from "react";
import MenuButton from "./MenuButton";

class FirstPage extends Component {
  render() {
    return (
      <div id="landingPageContainer" className="landingPageContainer">
        <MenuButton
          toggleMenu={this.props.toggleMenu}
          isMenuOpen={this.props.isMenuOpen}
        />

        <div className="catWithGlassses">
          <img
            className="catImage"
            src={require("../assets/images/grumpy.png")}
            alt="Cat funny"
          />
          <img
            className="glassess align-justify-self-center"
            src={require("../assets/images/glasses.png")}
            alt="Glasses for cat"
          />
        </div>
        <article className="welcomeMessage align-justify-self-center">
          <h1>Hi, I am Indre</h1>
          <h4>
            Passionate about front end development.
            <br />
            Great sense of humour
          </h4>
        </article>
      </div>
    );
  }
}

export default FirstPage;
