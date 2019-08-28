import React, { Component } from 'react';
import Particles from 'react-particles-js';

class About extends Component {
  render() {
    return (
      <div className="about-alex">
        <header className="about-header">
          <Particles className="partycles" params={particleParams} />
          <div className="main-header">
            <h1>Alexander</h1>
            <img
              className="about-img"
              src="https://i.imgur.com/RYVm3qhm.jpg"
              alt="alex"
            />
          </div>
          <Particles className="partycles" params={particleParams} />
        </header>
        <div className="about-body">
          <div styles={flexStyle}>
            <Particles className="particles" params={particleParams} />
            <Particles className="particles" params={particleParams} />
          </div>
          <div className="words">
            <p>
              Hello, world! <br />
              I'm a developer who sleeps in Brooklyn. My favorite language right
              now is JavaScript, but that may change as I learn. I love
              challenging myself, learning new things, and eating{' '}
              <a
                className="about-link"
                href="https://lavillapizza.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Italian food
              </a>
              . To stay active, I go to the gym, go for a run, or practice my
              rock climbing skills at{' '}
              <a
                className="about-link"
                href="https://brooklynboulders.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brooklyn Boulders
              </a>
              .
            </p>
            <p>
              I'm also a cellist! I went to a
              {' '}
              <a
                className="about-link"
                href="https://www.google.com/search?q=talent+unlimited+high+school&rlz=1C5CHFA_enUS738US738&oq=talent+un&aqs=chrome.0.0j69i57j69i60j69i61j0j35i39.4192j0j4&sourceid=chrome&ie=UTF-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                performing arts high school
              </a>
              , where I was an instrumental major. On the weekends, I attended{' '}
              <a
                className="about-link"
                href="https://www.juilliard.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Juilliard
              </a>
              's pre-college. I probably would've been persuing a career in
              music if my friends and I didn't form a robotics team during our
              junior year. We had to convince our physics teacher to supervise
              us. We would meet during lunch and after school so we can learn
              how to build, and program a robot. The goal was to compete.
            </p>
            <p>
              {' '}
              My teacher had us registered to enter a competition, but we had a
              late start(we made the club halfway into the school year). Even
              with all the extra time we put in, we were not ready by the
              deadline. That didn't discourage us! We finished the robot a
              little while after, and I, for one, was elated. This was the
              catalyst that catapulted me from music into the wonderful world of
              technology!
            </p>
          </div>
          <div styles={flexStyle}>
            <Particles className="particles" params={particleParams} />
            <Particles className="particles" params={particleParams} />
          </div>
        </div>
      </div>
    );
  }
}

const flexStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const particleParams = {
  particles: {
    number: {
      value: 105,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#fff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 2,
        color: '#42c5fa'
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.41,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 125,
      color: '#42c5fa',
      opacity: 0.7,
      width: 0.5
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: ['grab']
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 115,
        line_linked: {
          opacity: 0.7,
          width: 0.3
        }
      },
      bubble: {
        distance: 150,
        size: 4,
        duration: 1,
        opacity: 0.5,
        speed: 7
      },
      repulse: {
        distance: 55,
        duration: 1
      },
      push: {
        particles_nb: 3
      },
      remove: {
        particles_nb: 1
      }
    }
  },
  retina_detect: true
};

export default About;
