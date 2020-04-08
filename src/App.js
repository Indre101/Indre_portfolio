import React, { Component } from "react";
import FirstPage from "./components/FirstPage";
import MenuPopUp from "./components/MenuPopUp";
import ProjectPage from "./components/ProjectPage";
import ProjectsPage from "./components/ProjectsPage";
import CloseProjectBtn from "./components/CloseProjectBtn";
import AboutMe from "./components/AboutMe";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false,
      menuDisplayProperty: "none",
      isProjectPageDisplayed: false,
      projects: [],
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleProjectPage = this.toggleProjectPage.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => {
      return {
        isMenuOpen: prevState.isMenuOpen ? false : true,
        menuDisplayProperty: "flex",
      };
    });
  }

  componentDidMount() {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ projects: data });
      });
  }

  toggleProjectPage() {
    this.setState((prevState) => {
      return {
        isProjectPageDisplayed: !prevState.isProjectPageDisplayed,
      };
    });
  }

  render() {
    const displayProjectPage = this.state.isProjectPageDisplayed
      ? this.state.projects.map((project) => (
          <ProjectPage
            key={project.id}
            isProjectPageDisplayed={this.state.isProjectPageDisplayed}
            toggleProjectPage={this.toggleProjectPage}
            activeproject={project}
            projectListLength={this.state.projects.length}
          />
        ))
      : null;

    const projectPageListDisplay = this.state.isProjectPageDisplayed
      ? true
      : false;
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
