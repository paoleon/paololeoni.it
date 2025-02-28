import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educations: undefined,
      works: undefined,
      skills: undefined,
    };
  }

  domainFromUrl() {
    let url = ""
    var result
    var match
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
      result = match[1]
      if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
        result = match[1]
      }
    }
    return result
  }

  getEducationOld() {
    if (this.props.data) {
      const filterActive = (education) => { //implementazione SOLO DI ESEMPIO...
        return education.isActive;
      }
      var educations = this.props.data.education.filter(filterActive).map(function (education) {
        return (
          <div key={`${education.school}-${education.graduated}`}>
            <div className="education-card-left">
              <img
                crossOrigin="anonymous"
                className={education.className}
                src={education.logo} //TODO aggiungi gestione logo interno (senza /io/ logo esterno)
                alt={education.school}
              />
            </div>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            {education.description &&
              <p>{education.description} {education.link &&
                <a href={education.link} target="_blank">{education.link}</a>
              }</p>
            }
          </div>
        );
      });
    }
    return educations ? educations.reverse() : educations;
  }

  getWorks() {
    if (this.props.data) {
      var works = this.props.data.work.map(function (work) {
        return (
          <div key={`${work.company}-${work.title}`}>
            {/* <h3>{work.company}</h3> */}
            <div className="work-card-left">
              <img
                crossOrigin="anonymous"
                // className="work-roundedimg"
                className={work.className}
                src={work.logo}
                alt={work.company}
              />
            </div>
            <p className="info">{work.title}</p>

            <p className="info"><em className="date">{work.years}</em></p>
            <p>{work.description}</p>
          </div>
        );
      });
    }
    return works ? works.reverse() : works;
  }

  getSkills() {
    if (this.props.data) {
      var skills = this.props.data.skills.map(function (skill) {
        var className = "bar-expand " + skill.name.toLowerCase();
        return (
          <li key={skill.name}>
            <span style={{ width: skill.level }} className={className}></span>
            <em>{skill.name}</em>
          </li>
        );
      });
    }

    return skills ? skills.reverse() : skills;
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
    }

    return (
      <section id="resume" >
        {/* <div className="education-section" id="education">
          <h1 className="education-heading">Education</h1>
          <div className="education-card-container">{this.getEducation()}</div>
        </div> */}

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{this.getEducationOld()}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{this.getWorks()}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{this.getSkills()}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
