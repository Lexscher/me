import React, { Component } from "react";
import tic from "../images/tic-tac-time.png";
import sharp from "../images/cut-it.png";
import urFave from "../images/concipilo.png";
import pika from "../images/pokedex.png";
import pong from "../images/pong.png";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [
        {
          name: "Tic-Tac-Time",
          screenshot_url: `${tic}`,
          description: "I Recreated Tic-Tac-Toe!!",
          app_link: "https://lexscher.github.io/Tic-Tac-Toe/",
          github_link: "https://github.com/Lexscher/Tic-Tac-Toe",
          technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
        },
        {
          name: "Cut It",
          screenshot_url: `${sharp}`,
          description: "View and add to a gallery of haircuts!",
          app_link: "https://you-need-to-cut-it.herokuapp.com/",
          github_link: "https://github.com/Lexscher/Haircut_Gallery",
          technologies: [
            "Ruby on Rails",
            "BCrypt",
            "Auth",
            "JWT Sessions",
            "React",
            "JavaScript",
            "CSS"
          ]
        },
        {
          name: "Concipilo",
          screenshot_url: `${urFave}`,
          description: "A text adventure game!",
          app_link: "https://lexscher.github.io/Concipilo/",
          github_link: "https://github.com/Lexscher/Concipilo",
          technologies: ["Vanilla JavaScript", "HTML", "CSS"]
        },
        {
          name: "Pokèmon App",
          screenshot_url: `${pika}`,
          description: "Behold... The PokèDex of your dreams!",
          app_link: "https://alexanders-pokeapp.herokuapp.com/",
          github_link: "https://github.com/Lexscher/Pok-Dex-App",
          technologies: ["React", "Poke Api", "CSS", "JavaScript"]
        },
        {
          name: "Pong.",
          screenshot_url: `${pong}`,
          description: "Play the Iconic game, Pong!",
          app_link: "https://lexscher.github.io/pong/",
          github_link: "https://github.com/Lexscher/pong",
          technologies: ["HTML Canvas", "Vanilla JS", "CSS"]
        }
      ]
    };
  }

  render() {
    let projects = this.state.project.map(project => (
      <div className="project-container" key={project.name}>
        <h1>{project.name}</h1>
        <img
          className="project-image"
          src={project.screenshot_url}
          alt={project.name}
        />
        <p className="project-description">{project.description}</p>
        <div className="tech-container">
          {project.technologies.map(technology => (
            <h3 className="tech">{technology}</h3>
          ))}
        </div>
        <div className="project-links">
          <a className="project-link" href={project.app_link} target="_blank">
            <p>Check it Out!</p>
            <img
              className="project-link-image"
              src="https://www.freepngimg.com/download/web_design/24947-9-cursor-hand-transparent-image.png"
              alt="Link to learn more!"
            />
          </a>
          <a
            className="project-link"
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
            <img
              className="project-link-image"
              src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png"
              alt="Link to learn more!"
            />
          </a>
        </div>
      </div>
    ));
    return <div className="projects-container">{projects}</div>;
  }
}

export default Portfolio;
