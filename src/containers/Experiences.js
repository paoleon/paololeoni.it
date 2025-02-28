import React, { Component } from "react";
import Emoji from "../emoji/Emoji";
import Button from "../components/Button/Button";
import "./Experiences.css";

class Experiences extends Component {
  constructor(props) {
    super(props);
    //this.prettifyDate = this.prettifyDate.bind(this);
  }

  render() {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (this.props.data) {
      var experiences = this.props.data.experiences.map(function (
        experience
      ) {

        let style = { height: experience.logoHeight }
        let formatted_achieve_date = new Date(experience.achieve_date).toLocaleDateString("it-IT", { day: '2-digit', month: 'short', year: 'numeric' })
        return (
          <div className="dark-mode experience-card experience-tooltip" key={experience.title}>
            <div className="relative">
              <div className="d-inline-flex">
                <div className="d-flex flex-row">
                  <div className="p-2"><h5>{experience.title} </h5></div>
                  <div className="p-2"><small>{experience.fromTo} </small></div>
                  <div className="p-2"><img src={`${publicUrl}/${experience.logo}`}
                    alt={`${experience.title} badge`}
                    className="experience-card-image " style={style} />
                  </div>
                </div>
                <small>{experience.description}</small>
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
              Hands-On Lab Experiences <Emoji label="sheep"/>
              </h1>
            <p className="dark-mode subTitle achievement-subtitle">

            </p>
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
