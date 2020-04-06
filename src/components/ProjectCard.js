import React, { Component } from "react";
import "../App.css";

class ProjectCard extends Component {
  render() {
    const imageUrl = require(`../assets/featured-img/${this.props.project.featuredImage}`);

    console.log(this.props.project.featuredImage);
    return (
      <a href={`#${this.props.project.id}`}>
        <article
          className="project"
          onClick={() => this.props.toggleProjectPage()}>
          <div className="projectShortInfo">
            <h3>{this.props.project.projectName}</h3>
            <h4>{this.props.project.typeOfProject}</h4>
          </div>
          <div
            className="projectCard"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}></div>
        </article>
      </a>
    );
  }
}

export default ProjectCard;
