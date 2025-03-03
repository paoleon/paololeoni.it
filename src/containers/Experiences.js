import React, { Component } from "react";
import Emoji from "../emoji/Emoji";
import "./Experiences.css";

class Experiences extends Component {
  // constructor(props) {
  //   super(props);
  //   //this.prettifyDate = this.prettifyDate.bind(this);
  // }

  render() {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (this.props.data) {
      var experiences = this.props.data.experiences.map((experience) => {
        let style = { height: experience.logoHeight };
        let formatted_achieve_date = experience.achieve_date
          ? new Date(experience.achieve_date).toLocaleDateString("it-IT", { 
              day: '2-digit', month: 'short', year: 'numeric' 
            })
          : "(No Date)";
      
        return (
          <div className="dark-mode experience-card experience-tooltip" key={experience.title}>
            <div className="experience-container">
              
              {/* Sezione Immagine */}
              <div className="experience-logo">
                <img 
                  src={`${publicUrl}/${experience.logo}`} 
                  alt={`${experience.title} badge`}
                  className="experience-card-image" 
                  style={style}
                  onError={(e) => {
                    e.target.onerror = null; // Evita loop infinito
                    e.target.src = publicUrl+"/images/Certifications/dafault-graduation.jpg"; // Immagine di default
                  }}
                />
              </div>
      
              {/* Sezione Testo */}
              <div className="experience-text">
                <h5>{experience.title}</h5>
                <small>{experience.fromTo}</small>
                <p>{experience.description}</p>
                <small>{formatted_achieve_date}</small>
              </div>
      
            </div>
          </div>
        );
      });
      
    }
    return (
      <section id="Experience">
        <div className="achievement-main-div main">
          <div className="achievement-header">
            <h1 className="heading title">
              {/*https://unicode.org/emoji/charts/full-emoji-list.html*/}
              Hands-On Lab Experiences <Emoji symbol="💻" label="projects" />
              </h1>
            <p className="dark-mode subTitle achievement-subtitle"></p>
          </div>
          <div className="experience-cards-div main" id="Experience-list">
            <div className="list-group">
              {experiences}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experiences;
