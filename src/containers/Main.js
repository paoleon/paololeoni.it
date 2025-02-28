import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./Main.css";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
import WhatIDo from "./WhatIDo";
import Certification from "./Certification";
import Experiences from "./Experiences";
import { StyleProvider } from "../contexts/StyleContext";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,

      foo: "bar",
      resumeData: {},
    };
    
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    $.ajax({
      url: `${publicUrl}/resumeData.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log("getResumeData", err);
        alert("getResumeData " + err);
      },
    });
  }

  componentDidMount() {
    //GA
    ReactGA.pageview(window.location.pathname);
    this.getResumeData();

    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark }, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}>
          <Header data={this.state.resumeData.main} />
          <About 
            main={this.state.resumeData.main} 
            resume={this.state.resumeData.resume}
            portfolio={this.state.resumeData.portfolio}
            certifications={this.state.resumeData.certifications}
            />
          <WhatIDo data={this.state.resumeData.whatido} />
          <Certification data={this.state.resumeData.certifications} />
          <Resume data={this.state.resumeData.resume} />
          <Experiences data={this.state.resumeData.experiences} />
          {/* <Portfolio data={this.state.resumeData.portfolio} /> }
          {/* <Testimonials data={this.state.resumeData.testimonials} /> */}
          {/* <Contact data={this.state.resumeData.main} /> */}
          <Footer data={this.state.resumeData.main} />
        </StyleProvider>
      </div>
    );
  }
}
