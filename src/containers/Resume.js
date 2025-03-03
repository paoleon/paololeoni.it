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
    let url = "";
    let result;
    let match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im
    );

    if (match) {
      result = match[1];
      let subMatch = result.match(/^[^.]+\.(.+\..+)$/);
      if (subMatch) {
        result = subMatch[1];
      }
    }

    return result;
  }

  getEducationOld() {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (!this.props.data || !this.props.data.education) {
      return null; // 🔹 Se `education` non esiste, restituisci `null`
    }
    console.log("Education Data:", this.props.data?.education);
    const filterActive = (education) => education.isActive; // 🔹 Verifica che `education` sia attivo

    let educations = this.props.data.education
      .filter(filterActive)
      .map((education) => (
        <div key={`${education.school}-${education.graduated}`}>
          <div className="education-card-left">
            <img
              crossOrigin="anonymous"
              className={education.className}
              src={education.logo}
              alt={education.school || "Education"}
              onError={(e) => {
                e.target.onerror = null; // Evita loop infinito
                e.target.src = publicUrl+"/images/Certifications/dafault-graduation.jpg"; // Immagine di default
              }}
            />
          </div>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated || "N/A"}</em>{" "}
            {/* 🔹 Evita crash su date mancanti */}
          </p>
          {education.description && (
            <p>
              {education.description}{" "}
              {education.link && (
                <a
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.link}
                </a>
              )}
            </p>
          )}
        </div>
      ));
    // console.log("Education:", educations);
    return educations.length > 0 ? (
      educations.reverse()
    ) : (
      <p>No education records available</p>
    ); // 🔹 Se non ci sono dati, mostra un messaggio
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

            <p className="info">
              <em className="date">{work.years}</em>
            </p>
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
      <section id="resume">
        {/* <div className="education-section" id="education">
          <h1 className="education-heading">Education</h1>
          <div className="education-card-container">{this.getEducation()}</div>
        </div> */}

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{this.getWorks()}</div>
        </div>

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
