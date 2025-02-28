import React, { Component } from "react";
import TypedReactDemo from "../components/TypedReactDemo.js";
import WavingEmoji from "../emoji/WavingEmoji";
import "./Header.css";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var occupationTarget = this.props.data.occupationTarget;
      var description = this.props.data.description || "sample | description";
      var splittedDescription = description.split("|");
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    } else {
      return (
        <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
          <h2>❌ Errore: Dati non disponibili</h2>
          <p>Assicurati che il backend stia inviando correttamente i dati.</p>
        </div>
      );
    }

    return (
      <header id="home" className="header">
        <nav id="nav-wrap" className={this.state.isScrolled ? "scrolled" : ""}>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll logo desktop" href="#home">
                <span className="grey-color"> &lt;</span>
                <span className="logo-name"> Paolo Leoni</span>
                <span className="grey-color">/&gt;</span>
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#WhatIDo">
                WhatIDo
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#Certifications">
                Certifications
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
            <li>
              <a className="smoothscroll" href="#resume">
                resume
              </a>
            </li>
            <li>
              <a className="" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner" id="theHeader">
          <div className="banner-text">
            <h1 className="responsive-headline">{/*👋*/}
              Hi all, I'm {name} <WavingEmoji symbol="👋" label="hi" />
            </h1>
            <p><TypedReactDemo
              strings={(description.split("|") && description.split("|").length > 0) ? description.split("|") : ["Missing", "splittedDescription"]} /></p>
            <h3 id="personalStatement">
              <span>
                <strong>I'm a {city}-based </strong>{occupation}
              </span>
              <br />
              <span>
              <strong>Working hard to become </strong>
                {(occupationTarget || "").split("\n").map((line, index) => (
                  <span key={index} style={{ display: "block", marginTop: "5px" }}>
                    {line}
                  </span>
                ))} 
              </span>
            </h3>
            
            {/* <p className="greeting-text-p subTitle">{description}</p> */}
            <hr />
            <p className="social">{networks}</p> 
          </div>
          <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        </div>

        
      </header>
    );
  }
}

export default Header;
