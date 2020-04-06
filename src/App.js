import React, { Component } from "react";
import FirstPage from "./components/FirstPage";
import MenuPopUp from "./components/MenuPopUp";
import ProjectPage from "./components/ProjectPage";
import ProjectsPage from "./components/ProjectsPage";
import CloseProjectBtn from "./components/CloseProjectBtn";
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

        <section id="AboutMe" className="pageSection aboutMePageContainer">
          <h2>About me</h2>

          <div className="infoAboutMe">
            <img src={require("./assets/images/indre-1.png")} alt="It's Me" />
            <div className="text textAboutme">
              <ul className="factsAboutMe">
                <li>I am a student at KEA</li>
                <li>
                  I enjoy coding, a lot, why? because it is challenging but it's
                  very gratifying to see the growth in my skills
                </li>
                <li>I feel comfortable while using CSS, HTML</li>
                <li>
                  JS is complex but very fun and interesting to be working with
                </li>
                <li>
                  Every bug that comes a long is an oportunity to grown and
                  learn
                </li>
                <li>I am motivated, positive and communicative person</li>
              </ul>
              <button className="liButton">Read more about me</button>
            </div>
          </div>

          <div className="aboutMeModal">
            <div className="inner">
              <p>
                Let me tell you more about myself then. I started studying at
                KEA, because I decided that I wanted to completely change my
                direction, and since I was always intruiged and interested in
                fornt end, I saw a multi media design study programme at KEA as
                a perfect opportunity to get the knowledge and start my path as
                front end developer.
                <br />
                I really enjoy coding and the challenges it can have, because
                there is always at least few ways how to solve a problem and
                this of cource inevitably helps to be in the position of
                constant improvement or frustration...but either way I enjoy it
                because of these reasons.
                <br />A little bit about my proffesional background for about
                5-6 years prior to education I was in a beauty/service industry
                responsible with customer support and providing service. I used
                to do eyelash extensions at a beauty salon but after a while I
                decided to open my own and it was a learning experience, that
                taught me a lot in general and what I would like my job to be.{" "}
                <br />
                One of the main reasons why i decided to stop my busssiness and
                pursue this is because I felt like I wasn't growing
                proffesionally anymore. That was one of the main things that
                made front end development so interestnig for me.
                <br />
                Maybe the lsat few things i'd like to say about me is that I am
                motivated, independent and friendly person, I have few hobbies,
                none of whicha are really impressive.
              </p>
            </div>
          </div>

          <footer>
            <div className="icons">
              <a href="https://www.linkedin.com/feed/">
                <img
                  src={require("./assets/icons/icon-one.png")}
                  alt="Icon of social media"
                />
              </a>
              <a href="https://github.com/Indre101">
                <img
                  src={require("./assets/icons/icon-2.png")}
                  alt="Icon of social media"
                />
              </a>
              <img
                src={require("./assets/icons/mail-1.svg")}
                alt="Icon of social media"
              />
              <h4>email: zygaityte.indre@gmail.com</h4>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
