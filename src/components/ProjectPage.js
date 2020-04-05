import React, { Component } from "react";
import "../App.css";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      hasRandomImg: false,
      isDisplayingRandomfact: false,
    };

    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.randomIconClicked = this.randomIconClicked.bind(this);
  }

  handleVideoClick() {
    console.log(this.props.activeproject);
    if (this.state.isPlaying) {
      this.video.style.setProperty("--grayScale", 1);

      this.video.pause();
    } else {
      this.video.play();
      this.video.style.setProperty("--grayScale", 0);
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  randomIconClicked() {
    this.setState({
      isDisplayingRandomfact: !this.state.isDisplayingRandomfact,
    });
  }

  render() {
    const isProjectPageDisplayed = this.props.isProjectPageDisplayed
      ? "d-grid"
      : "d-none";

    const playdButtonDisplay = this.state.isPlaying ? "d-none" : "d-block";
    const randomFactDisplay = this.state.isDisplayingRandomfact
      ? "d-flex"
      : "d-none";

    return (
      <div className={`projectPage ${isProjectPageDisplayed}`}>
        <div
          className={`randomFactBg ${randomFactDisplay}`}
          onClick={this.randomIconClicked}>
          <div className={`randomFact`}>
            <div className="innerRandomFact">
              <img
                src={require("../assets/randomProjectImg/chad.png")}
                alt="Random"
              />
              <h4>Random fact about this projects is</h4>
              <p>{this.props.activeproject.randomFact}</p>
            </div>
          </div>
        </div>
        <button
          className="closeBtn"
          onClick={() => {
            this.props.toggleProjectPage();
          }}></button>
        <div className="projectInformation">
          <div className="longerInfo">
            <a
              href={`${this.props.activeproject.projectLink}`}
              rel="noopener noreferrer"
              target="_blank">
              <h2>{this.props.activeproject.projectName}</h2>
              <img src={require("../assets/icons/link-icon.png")} alt="Link" />
            </a>
            <h3>{`${this.props.activeproject.typeOfProject}`}</h3>
            <h5>
              {`(${this.props.activeproject.individualOrGroup} project)`}{" "}
            </h5>

            <p>{this.props.activeproject.factsAboutTheProject}</p>
            <div className="technologies">
              <p>
                <b>Technologies and software</b>{" "}
                {this.props.activeproject.tools}
              </p>
            </div>
            <div onClick={() => this.randomIconClicked()}>
              <img
                className="innerImg"
                src={require(`../assets/projectIcons/${this.props.activeproject.featuredImage}`)}
                alt="Chad"
              />
            </div>
          </div>
          <div className="gifContainer">
            <button
              className={`gifBtn ${playdButtonDisplay}`}
              onClick={this.handleVideoClick}></button>

            <video
              ref={(video) => (this.video = video)}
              muted
              className="projectGIF"
              src={require(`../assets/videos/${this.props.activeproject.video}`)}
              playing="true"
              loop
              onClick={this.handleVideoClick}></video>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
