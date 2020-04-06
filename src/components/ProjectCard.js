import React, { Component } from "react";
import "../App.css";

class ProjectCard extends Component {
  render() {
    console.log();
    return (
      <a href={`#${this.props.project.id}`}>
        <article
          className="project"
          onClick={() =>
            this.props.handleClickedProjectCard(this.props.project.id)
          }>
          <div className="projectShortInfo">
            <h3>{this.props.project.projectName}</h3>
            <h4>{this.props.project.typeOfProject}</h4>
          </div>
          <div className="projectCard"></div>
        </article>
      </a>
    );
  }
}

export default ProjectCard;
