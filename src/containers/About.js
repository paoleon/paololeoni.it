import React, { Component } from 'react';
import "./About.css"
import CVComponent from '../components/CVComponent.jsx';
class About extends Component {
   render() {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
      if (this.props.main) {
         var name = this.props.main.name;
         var surname = this.props.main.surname;
         var profilepic = this.props.main.image;
         var bio = this.props.main.bio;
         var street = this.props.main.address.street;
         var city = this.props.main.address.city;
         var state = this.props.main.address.state;
         var zip = this.props.main.address.zip;
         var phone = this.props.main.phone;
         var email = this.props.main.email;
         var resumeDownload = this.props.main.resumedownload;
         var resumeGenerate = this.props.main.resumegenerate;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={`${publicUrl}/${profilepic}`} alt="Paolo Leoni Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p dangerouslySetInnerHTML={{ __html: bio }} />
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name} {surname}</span><br />
                           <span>{street}<br />
                              {city}, {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     {resumeGenerate ?
                        <div>GENERATE</div> : null}
                     {resumeDownload ? <div className="columns download">
                        <p>
                           <a href={`${publicUrl}/${resumeDownload}`} className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div> : null}
                     <CVComponent/>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
