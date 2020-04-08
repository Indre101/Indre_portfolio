import React, { Component } from "react";

export default class MenuPopUp extends Component {
  render() {
    const activeClassMenu = !this.props.isMenuOpen
      ? "slideDownAnimation"
      : "slideUpAnimation";

    return (
      <article
        id="openMenuWindow"
        className={`openMenuWindow  ${activeClassMenu}`}
        style={{ display: this.props.menuDisplayProperty }}>
        <a onClick={() => this.props.toggleMenu()} href="#landingPageContainer">
          <h2>Home</h2>
        </a>
        <a onClick={() => this.props.toggleMenu()} href="#AboutMe">
          <h2>About Me</h2>
        </a>
        <a onClick={() => this.props.toggleMenu()} href="#Projects">
          <h2>Projects</h2>
        </a>
        <a onClick={() => this.props.toggleMenu()} href="#Contacts">
          <h2>Contact</h2>
        </a>
      </article>
    );
  }
}
