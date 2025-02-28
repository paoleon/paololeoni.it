import React, { Component } from "react";
import Emoji from "../emoji/Emoji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons';
import "./WhatIDo.css";
library.add(fab, fas)

class WhatIDo extends Component {
  render() {
    if (this.props.data) {
      var header = this.props.data.header;
      var h2 = this.props.data.h2;
      var loghi = this.props.data.loghi.map(function (logo) {
        return (
          <li key={logo.name} className="software-skill-inline" name={logo.name}>
            <FontAwesomeIcon icon={[logo.iconPrefix, logo.iconName]} />
            <p>{logo.name}</p>
          </li>
        );
      });
      var lightningPhrases = this.props.data.lightningPhrases.map(function (lightningPhrase) {
        return (
          <p key={lightningPhrase.text} className="dark-mode subTitle skills-text">
            <Emoji symbol={lightningPhrase.symbol} label={lightningPhrase.label} />
            {lightningPhrase.text}
          </p>
        );
      });
    }
    return (
      <section id="WhatIDo">
        <div className="main">
          <h2 className="dark-mode skills-heading">What I do </h2>
          <p className="dark-mode subTitle skills-text-subtitle">
            {header}
          </p>
          <p className="dark-mode subTitle skills-text-subtitle">
            {h2}
          </p>
          <div>
            <div className="software-skills-main-div">
              <ul className="dev-icons">
                {/* LOGHI DA FILE DI PROPERTIES */}
                {loghi}
              </ul>
            </div>
          </div>
          <div>
            {lightningPhrases}
          </div>
        </div>
      </section>
    );
  }
}

export default WhatIDo;
