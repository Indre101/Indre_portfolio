import React, { Component } from "react";

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
    this.stopVideo = this.stopVideo.bind(this);
  }

  handleVideoClick() {
    if (this.state.isPlaying) {
      this.video.dataset.clicked = "false";

      this.video.pause();
    } else {
      this.video.play();
      this.video.dataset.clicked = "true";
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  toggleRandomFactDisplay() {
    this.setState({
      isDisplayingRandomfact: !this.state.isDisplayingRandomfact,
    });
  }

  stopVideo() {
    if (this.state.isPlaying) {
      this.video.dataset.clicked = "false";
      this.video.pause();
    }
  }

  handleClickRandomIcon() {
    if (this.state.isRandomIconClicked) {
      this.setState({
        isDisplayingRandomfact: true,
      });
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            isRandomIconClicked: prevState.isRandomIconClicked ? false : true,
          };
        });
      }, 1000);
    } else {
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

    const playdButtonDisplay = this.state.isPlaying ? "d-none" : "d-flex";
    const displayRandomLink = this.props.activeproject.randomlink
      ? "d-inline"
      : "d-none";
    const firstArrowDisplay = this.props.activeproject.id === 0 ? true : false;
    const LastArrowDisplay =
      this.props.activeproject.id === this.props.projectListLength - 1
        ? true
        : false;

    const iconAnimationStatus = this.props.projectIconAnimation
      ? "play"
      : "stop";

    return (
      <div
        data-id={this.props.activeproject.id}
        id={this.props.activeproject.id}
        className={`projectPage  ${isProjectPageDisplayed}`}>
        <div
          className={`randomFactBg `}
          data-visible={`${this.state.isRandomIconClicked}`}
          data-endanimation={`${this.state.isDisplayingRandomfact}`}
          onClick={this.handleClickRandomIcon}>
          <div className="randomFact">
            <div className="innerRandomFact">
              <img
                src={require(`../assets/randomProjectImg/${this.props.activeproject.randomFactImg}`)}
                alt="Random"
              />
              <div className="randomFactText">
                <h4>Random fact</h4>
                <p>
                  {this.props.activeproject.randomFact}{" "}
                  <a
                    className={`randomLink ${displayRandomLink}`}
                    href={
                      this.props.activeproject.randomlink
                        ? this.props.activeproject.randomlink
                        : "_self"
                    }
                    rel="noopener noreferrer"
                    target="_blank">
                    <img src={require("../assets/icons/link.svg")} alt="" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="projectInformation">
          <div className="longerInfo">
            <a
              className="arrowLinks arrowLinkPrev safari_only"
              href={`#${this.props.activeproject.id - 1}`}>
              <div
                className="arrow arrowPrevious"
                data-firstarrow={firstArrowDisplay}
                onClick={this.stopVideo}>
                <img
                  src={require("../assets/icons/left-arrow-grey-3.png")}
                  alt=""
                />
                <h5>prev</h5>
              </div>
            </a>
            <a
              className="arrowLinks arrowLinkNext safari_only"
              href={`#${this.props.activeproject.id + 1}`}>
              <div
                className="arrow arrowNext"
                data-firstarrow={LastArrowDisplay}
                onClick={this.stopVideo}>
                <h5>next</h5>
                <img
                  src={require("../assets/icons/left-arrow-grey-3.png")}
                  alt=""
                />
              </div>
            </a>
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
                <b>Improved skills: </b> {this.props.activeproject.tools}
              </p>
            </div>
            <div
              className="innerImgContainer"
              data-active={`${this.state.isRandomIconClicked}`}
              onClick={() => {
                this.handleClickRandomIcon();
                this.props.stopProjectIconAnimation();
              }}>
              <img
                className="innerImg"
                src={require(`../assets/projectIcons/${this.props.activeproject.icon}`)}
                data-animation={`${iconAnimationStatus}`}
                alt="Chad"
              />
            </div>
          </div>
          <div className="gifContainer">
            <div
              className={`gifBtnContainer ${playdButtonDisplay}`}
              onClick={this.handleVideoClick}>
              <button className="gifBtn"></button>
            </div>
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

        <div className="mobileMenu safari_only">
          <a
            className="arrowLinksMobile arrowLinkPrevMobile "
            href={`#${this.props.activeproject.id - 1}`}>
            <div
              className=""
              data-firstarrow={firstArrowDisplay}
              onClick={this.stopVideo}>
              <img
                src={require("../assets/icons/left-arrow-grey-3.png")}
                alt=""
              />
            </div>
          </a>
          <div
            className="closeBtnMobile"
            onClick={() => this.props.toggleProjectPage()}>
            <img
              src={require("../assets/icons/close.svg")}
              alt="Close button"
            />
          </div>
          <a
            className="arrowLinksMobile arrowLinkNextMobile"
            href={`#${this.props.activeproject.id + 1}`}>
            <div
              className=""
              data-firstarrow={LastArrowDisplay}
              onClick={this.stopVideo}>
              <img
                src={require("../assets/icons/left-arrow-grey-3.png")}
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
