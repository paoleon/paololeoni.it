import React, { Component } from "react";
import Emoji from "../emoji/Emoji";
import Button from "../components/Button/Button";
import "./Certifications.css";

class Certification extends Component {
  // constructor(props) {
  //   super(props);
  //   //this.prettifyDate = this.prettifyDate.bind(this);
  // }

  prettifyDate(date) {
    console.log("DATE is" + date)
    return new Intl.DateTimeFormat('en-GB', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }).format(new Date(date))
  }

  render() {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (this.props.data) {
      var certifications = this.props.data.certifications.map(function (
        certification
      ) {

        let style = { height: certification.logoHeight }
        let formatted_achieve_date = new Date(certification.achieve_date).toLocaleDateString("it-IT", { day: '2-digit', month: 'short', year: 'numeric' })
        return (
          <div className="dark-mode certificate-card tooltip" key={certification.title}>
            <div className="certificate-image-div">
              <img src={`${publicUrl}/${certification.logo}`}
                alt={`${certification.title} badge`}
                className="card-image" style={style} 
                onError={(e) => {
                  e.target.onerror = null; // Evita loop infinito
                  e.target.src = publicUrl+"/images/Certifications/dafault-graduation.jpg"; // Immagine di default
                }}/>
              {certification.achieve_date ? <span className="tooltiptext">{formatted_achieve_date}</span> : null}
            </div>
            <div className="certificate-detail-div">
              {certification.ongoing && <h2 className="background-yellow">Ong<i className="fa fa-cog fa-spin"></i>ing</h2>}
              <h5 className="dark-mode card-title">{certification.title}</h5>
              <div className="dark-mode card-subtitle">
                <ul>
                  {certification.description}
                </ul>
              </div>
            </div>
            {certification.verificationLink &&
              <Button href={certification.verificationLink} title="Verification Link" icon="" />}
          </div>
        );
      });
    }
    return (
      <section id="Certifications">
        <div className="achievement-main-div main">
          <div className="achievement-header">
            <h1 className="heading title">
              Professional Certifications <Emoji symbol="🏅" label="win" />
            </h1>
            <p className="dark-mode subTitle achievement-subtitle">

            </p>
          </div>
          <div className="achievement-cards-div main" id="Certification">
            {certifications}
          </div>
        </div>
      </section>
    );
  }
}

export default Certification;
