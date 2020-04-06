import React, { Component } from "react";
import "../App.css";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      hasRandomImg: false,
      isDisplayingRandomfact: false,
      isRandomIconClicked: false,
    };

    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.toggleRandomFactDisplay = this.toggleRandomFactDisplay.bind(this);
    this.handleClickRandomIcon = this.handleClickRandomIcon.bind(this);
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

  toggleRandomFactDisplay() {
    this.setState({
      isDisplayingRandomfact: !this.state.isDisplayingRandomfact,
    });
  }

  handleClickRandomIcon() {
    if (this.state.isRandomIconClicked) {
      this.setState({
        isDisplayingRandomfact: true,
      });
      console.log("true");
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            isRandomIconClicked: prevState.isRandomIconClicked ? false : true,
          };
        });
      }, 1000);
    } else {
      console.log("false");
      this.setState({
        isDisplayingRandomfact: false,
      });

      this.setState((prevState) => {
        return {
          isRandomIconClicked: prevState.isRandomIconClicked ? false : true,
        };
      });
    }
  }

  render() {
    const isProjectPageDisplayed = this.props.isProjectPageDisplayed
      ? "d-grid"
      : "d-none";

    const playdButtonDisplay = this.state.isPlaying ? "d-none" : "d-block";
    // const randomFactDisplay = this.state.isRandomIconClicked
    //   ? "d-flex"
    //   : "slideLeft";

    return (
      <div
        id={this.props.activeproject.id}
        className={`projectPage ${isProjectPageDisplayed}`}>
        <div
          className={`randomFactBg `}
          data-visible={`${this.state.isRandomIconClicked}`}
          data-endanimation={`${this.state.isDisplayingRandomfact}`}
          onClick={this.handleClickRandomIcon}>
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
        <div className="controlButtons">
          <button
            className="closeBtn"
            onClick={() => {
              this.props.toggleProjectPage();
            }}></button>
        </div>

        <div className="projectInformation">
          <div className="longerInfo">
            <div className="arrow arrowPrevious">
              <img
                src={require("../assets/icons/left-arrow-grey.svg")}
                alt=""
              />
              <h5>previous</h5>
            </div>
            <div className="arrow arrowNext">
              <h5>next</h5>
              <img
                src={require("../assets/icons/left-arrow-grey.svg")}
                alt=""
              />
            </div>
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
            <div
              className="innerImgContainer"
              data-active={`${this.state.isRandomIconClicked}`}
              onClick={() => this.handleClickRandomIcon()}>
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
