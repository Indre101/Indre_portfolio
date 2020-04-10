import React, { Component } from "react";
import data from "./data";
import FirstPage from "./components/FirstPage";
import MenuPopUp from "./components/MenuPopUp";
import ProjectPage from "./components/ProjectPage";
import ProjectsPage from "./components/ProjectsPage";
import CloseProjectBtn from "./components/CloseProjectBtn";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
class App extends Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false,
      menuDisplayProperty: "none",
      isProjectPageDisplayed: false,
      projects: [],
      projectIconAnimation: true,
      isLoaded: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleProjectPage = this.toggleProjectPage.bind(this);
    this.stopProjectIconAnimation = this.stopProjectIconAnimation.bind(this);
    this.togglePreloader = this.togglePreloader.bind(this);
  }

  togglePreloader() {
    this.setState({ isLoaded: true });
  }
  toggleMenu() {
    this.setState((prevState) => {
      return {
        isMenuOpen: prevState.isMenuOpen ? false : true,
        menuDisplayProperty: "flex",
      };
    });
  }

  stopProjectIconAnimation() {
    console.log("stoped Animation");
    this.setState(() => {
      return {
        projectIconAnimation: false,
      };
    });
  }

  componentDidMount() {
    this.setState({ projects: data });
    this.togglePreloader();
  }

  toggleProjectPage() {
    this.setState((prevState) => {
      return {
        isProjectPageDisplayed: !prevState.isProjectPageDisplayed,
      };
    });
  }

  render() {
    const preloaderDisplay = this.state.isLoaded ? "d-none" : "d-flex";
    const displayProjectPage = this.state.isProjectPageDisplayed
      ? this.state.projects.map((project) => (
          <ProjectPage
            key={project.id}
            isProjectPageDisplayed={this.state.isProjectPageDisplayed}
            toggleProjectPage={this.toggleProjectPage}
            activeproject={project}
            projectListLength={this.state.projects.length}
            stopProjectIconAnimation={this.stopProjectIconAnimation}
            projectIconAnimation={this.state.projectIconAnimation}
          />
        ))
      : null;

    const projectPageListDisplay = this.state.isProjectPageDisplayed
      ? true
      : false;
    return (
      <div>
        <div className={`preloader ${preloaderDisplay}`}>
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <FirstPage
          toggleMenu={this.toggleMenu}
          isMenuOpen={this.state.isMenuOpen}
        />
        <MenuPopUp
          isMenuOpen={this.state.isMenuOpen}
          toggleMenu={this.toggleMenu}
          menuDisplayProperty={this.state.menuDisplayProperty}
        />

        <ProjectsPage
          projects={this.state.projects}
          toggleProjectPage={this.toggleProjectPage}
        />
        <div className="projectPageList" data-visible={projectPageListDisplay}>
          <CloseProjectBtn toggleProjectPage={this.toggleProjectPage} />
          {displayProjectPage}
        </div>

        <AboutMe />
        <Contacts />
      </div>
    );
  }
}

export default App;
