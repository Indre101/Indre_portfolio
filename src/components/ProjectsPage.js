import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import "../App.css";

class ProjectsPage extends Component {
  render() {
    const { projects } = this.props;
    const projectList = projects.map(project => (
      <ProjectCard
        key={project.id}
        project={project}
        handleClickedProjectCard={this.props.handleClickedProjectCard}
      />
    ));
    return (
      <section id="Projects" className="pageSection projectsPageContainer">
        <h2>Projects</h2>
        <div className="projectsFilters align-justify-self-center">
          <div className="option ">
            <input id="All" type="radio" name="projects" value="personal" />
            <label className="filterOption" htmlFor="All">
              All
            </label>
          </div>
          <div className="option">
            <input id="school" type="radio" name="projects" value="school" />
            <label className="filterOption" htmlFor="school">
              School
            </label>
          </div>
          <div className="option ">
            <input
              id="personal"
              type="radio"
              name="projects"
              value="personal"
            />
            <label className="filterOption" htmlFor="personal">
              Personal
            </label>
          </div>
        </div>
        <div className="projects">{projectList}</div>
      </section>
    );
  }
}

export default ProjectsPage;
