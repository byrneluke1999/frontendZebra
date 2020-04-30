import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import textContent from "../textContent/About/hometext";

import { Link } from "react-router-dom";

//home page for the application.
//making use of the react library "reace anmated slider" to give the sliding between tabs effect

//defining a constant array with individual slide details.
const content = [
  {
    title: "A Constraint Satisfaction Problem Solver",
    description: textContent.about,
    subdesc: textContent.about2,
    subsubdesc: textContent.about3,
    button: "See Simulation!",
    image:
      "https://i.pinimg.com/originals/2c/e7/3a/2ce73a6234934b8252719a9307769da7.jpg",
    link: "/Simulation",
    slide: true,
  },
  {
    title: "The Zebra Puzzle",
    description: textContent.puzzleDesc,
    button: "See Simulation!",
    image:
      "https://img.favpng.com/23/14/21/geometry-color-rainbow-shape-wallpaper-png-favpng-1VqPRpafDuqXkFT3HhZSzyU7z.jpg",
    link: "/Simulation",
    slide: true,
    petVals: textContent.petVals,
    drinkVals: textContent.drinkVaks,
    smokeVals: textContent.smokeVals,
    natVals: textContent.natVals,
    colorVals: textContent.colorVals,
  },
  {
    title: "The Constraints",
    description: [
      textContent.rule1,
      textContent.rule2,
      textContent.rule3,
      textContent.rule4,
      textContent.rule5,
      textContent.rule6,
      textContent.rule7,
      textContent.rule8,
      textContent.rule9,
      textContent.rule10,
      textContent.rule11,
      textContent.rule12,
      textContent.rule13,
      textContent.rule14,
      textContent.rule15,
    ],
    button: "See Simulation!",
    image:
      "https://www.jakpost.travel/wimages/large/49-490797_download-htc-one-rainbow-geometry-pattern-wallpaper-download.jpg",
    link: "/Simulation",
    slide: false,
  },
  {
    title: "The Ordering of Constraints",
    description: textContent.orderingC,
    button: "See Non-Optimal-Simulation!",
    image:
      "https://hdfreewallpaper.net/wp-content/uploads/2018/02/geometric-shapes-wallpapers-easy.jpg",
    link: "/NotOptSimulation",
    slide: true,
  },
];

class Home extends React.Component {
  render() {
    return (
      <div>
        {/*Upon rendering, the constant is mapped over and each element is generated
          slides are loaded with their respective information and encased in the imported Slider component,
          which gives the visually appealing home page.
        */}
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
                <h1>{item.title}</h1>
                <p
                  style={{
                    fontSize: "18px",
                    fontStyle: "italic",
                    textShadow: "0 0 32px black",
                  }}
                >
                  {item.subdesc}
                </p>

                {Array.isArray(item.description) ? (
                  item.description.map((rule, i) => (
                    <ul key={i}>
                      <li key={i}>{rule}</li>
                    </ul>
                  ))
                ) : (
                  <p>{item.description}</p>
                )}
                <p>{item.colorVals}</p>
                <p>{item.natVals}</p>
                <p>{item.petVals}</p>
                <p>{item.drinkVals}</p>
                <p>{item.smokeVals}</p>
                {/*OI only wanted a button in some of the slides, for spacing on the page mainly so a boolean here
                    determines whether a button should be rendered in the slide.
                */}
                {item.slide ? (
                  <Link to={item.link}>
                    <button>{item.button}</button>
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
export default Home;
