import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import "../App.css";

class ProjectsPage extends Component {
  render() {
    const { projects } = this.props;
    const projectList = projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        toggleProjectPage={this.props.toggleProjectPage}
      />
    ));
    return (
      <section id="Projects" className="pageSection projectsPageContainer">
        <h2>Projects</h2>

        <div className="projects">{projectList}</div>
      </section>
    );
  }
}

export default ProjectsPage;
