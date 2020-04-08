import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <section id="AboutMe" className="pageSection aboutMePageContainer">
        <div className="infoAboutMe">
          <div className="infoAboutPart">
            <img src={require("../assets/images/indre-6.png")} alt="It's Me" />

            <div className="icons">
              <a href="https://www.linkedin.com/feed/">
                <img
                  src={require("../assets/icons/icon-one.png")}
                  alt="Icon of social media"
                />
              </a>
              <a href="https://github.com/Indre101">
                <img
                  src={require("../assets/icons/icon-2.png")}
                  alt="Icon of social media"
                />
              </a>
              <img
                src={require("../assets/icons/mail-1.svg")}
                alt="Icon of social media"
              />
            </div>
          </div>
          <div className="text textAboutme">
            <h2>About me</h2>
            <ul className="factsAboutMe">
              <li>I am a multimedia design programme student at KEA</li>
              <li>
                I enjoy coding, a lot, why? because it is challenging but it's
                very gratifying to see the growth in my skills
              </li>
              <li>I was self employed for 3 years prior to education</li>

              <li>At the moment I am teaching myself React</li>
              <li>I am motivated, positive and friendly person</li>
            </ul>

            <button className="liButton">Read more about me</button>
          </div>
        </div>

        <div className="aboutMeModal">
          <div className="inner">
            <div className="par par-1">
              <p>
                Let me tell you more about myself then. I decided to study MMD,
                because{" "}
                <strong> I wanted to change my professional direction</strong>,
                and since I was familiar with front end development from my
                previous education, I thought It was time to renew my knowledge
                and gain new skills.
              </p>
              <img
                src={require("../assets/icons/direction.svg")}
                alt="Direction"
              />
            </div>
            <div className="par par-2">
              <img src={require("../assets/icons/code-1.svg")} alt="Code" />
              <p>
                <strong>I really enjoy coding,</strong> the possibilities of
                everyday improvement, at the moment seems endless. I think
                that's the greatest appeal of this industry and of course along
                comes the challenges of being stuck at certain tasks but either
                way I enjoy it.
              </p>
            </div>

            <div className="par par-3">
              <p>
                A little bit about my professional background for about 3 years
                prior to education I was in a beauty/service industry working in
                my small business. Being self employed was a learning experience
                and a challenge. One of the main reasons why I decided to pursue
                MMD education, was that I felt like I wasn't growing
                professionally anymore. Everyday work tasks seemed very
                repetitive and I was working mostly alone, so{" "}
                <strong>I missed being part of the team as well.</strong>
              </p>
              <img src={require("../assets/icons/eye-1.svg")} alt="Eye" />
            </div>
            <div className="par par-4">
              <img src={require("../assets/icons/book-1.svg")} alt="Book" />
              <p>
                Maybe the last few things I'd like to say about me is that I am
                a a curious person, I tend to teach myself a lot of things on my
                own. Like taking upon to
                <strong> teach myself SASS, BOOTSTRAP or REACT.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* <footer>
          <div className="icons">
            <a href="https://www.linkedin.com/feed/">
              <img
                src={require("../assets/icons/icon-one.png")}
                alt="Icon of social media"
              />
            </a>
            <a href="https://github.com/Indre101">
              <img
                src={require("../assets/icons/icon-2.png")}
                alt="Icon of social media"
              />
            </a>
            <img
              src={require("../assets/icons/mail-1.svg")}
              alt="Icon of social media"
            />
          </div>
        </footer> */}
      </section>
    );
  }
}
