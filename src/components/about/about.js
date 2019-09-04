import React from "react";
import "../../css/utilities.css";
import "./about.css";

const About = () => {
  return (
    <>
      <h2 className="primary-heading">About</h2>
      <h3 className="secondary-heading">A little introduction about me</h3>

      <div className="about-text">
        <p className="about-inner-text">
          I'm <strong>Abhishek</strong>, a 22 year old{" "}
          <strong>Front End Developer</strong> , from Delhi, India
        </p>
        <p className="about-inner-text">
          I'm a fresh graduate of{" "}
          <strong>B'Tech ( Computer Science ) from IP University.</strong>{" "}
          During my college time I worked on some freelance projects, which were
          mainly wordpress websites. I felt the need to learn more and dive deep
          into the development feild.
        </p>
        <p className="about-inner-text">
          So, I started learning Javascript and took some online courses too
          like{" "}
          <strong>
            <br />
            Advanced CSS and Sass: Flexbox, Grid, Animations and More!
            <br />
            The Complete Javascript Course: Build Real projects
            <br />
            The Complete Guide (incl Hooks, React Router, Redux)
            <br />
            and many more Youtube Tutorials.
          </strong>
        </p>

        <h3 className="secondary-heading-tech">
          <strong>My current technology stack is:</strong>
        </h3>
        <p className="about-inner-text-tech">
          <i className="fab fa-html5" aria-hidden="true" />  HTML5&nbsp;	&nbsp;	&nbsp;
          <i className="fab fa-css3" aria-hidden="true" />  CSS3<br/>
          <i className="fab fa-js-square" />  JAVASCRIPT&nbsp;	&nbsp;	&nbsp;	
          <i className="fab fa-sass" />  SASS<br/>
          <i className="fab fa-react" />  REACTJS ( REDUX - GRAPHQL - GATSBY )
        </p>
      </div>
    </>
  );
};

export default About;
