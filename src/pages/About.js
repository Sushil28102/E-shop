import React from "react";
import '../App.css'

const About = () => {
  return (
    <div>
      <div className="div-about">
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/20529826/pexels-photo-20529826/free-photo-of-a-woman-in-a-lace-dress-and-earrings-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Jane"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Rajja Lemnari</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/2860902/pexels-photo-2860902.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Ayaka Kato </h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/3596953/pexels-photo-3596953.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="John"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Sobhan Joodi</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
