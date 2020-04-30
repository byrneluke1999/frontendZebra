import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import textContent from "../textContent/About/hometext";

import { Link } from "react-router-dom";

//small componennt to detail what the applicaion is in the application itself.
//CSL - FYP - Luke Byrne
//links to github are included.

const content = [
  {
    title: "Computer Science and Language",
    proj: "Final Year Project",
    author: "Luke Byrne",
    image:
      "https://www.ppt-backgrounds.net/uploads/writing-for-designers-clip-art-downloads.jpeg",
    issue: textContent.email,
    linkText: textContent.linkText,
    githubF: "Front End",
    githubB: "Back End",
  },
];

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item.proj}</h1>
                <h2>{item.title}</h2>
                <h3>{item.author}</h3>
                <p>{item.issue}</p>
                <p>{item.linkText}</p>
                <p>
                  <Link to={"/BackEnd"}>{item.githubB}</Link>
                </p>
                <p>
                  <Link to={"/FrontEnd"}>{item.githubF}</Link>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Contact;
