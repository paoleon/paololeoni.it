import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./Contact.css";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var image = this.props.data.image;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <Fade bottom duration={1000} distance="20px">
          <div className="main" id="contact">
            <h1 className="prof-title">Reach Out to me!</h1>
            <div className="row">
              <div className="main-content-profile">
                <div className="blog-header">
                  <p className="subTitle blog-subtitle">
                    {name}
                  </p>
                </div>
                <h2 className="bio-text">"{street}"</h2>
                
                <div className="opp-div">
                  <span className="desc-prof">
                    Open for opportunities: {city}
                  </span>
                </div>

              </div>
              <div className="image-content-profile">
                <img
                  src={"images/"+image}
                  alt={image}
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
