import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";

class Aboutme extends Component {
  constructor(props) {
    super(props);
    this.about = `I'm Furkan Doğan. I'm Ankara based Software Developer. 
    Experienced Partner with a demonstrated history of working in the software industry. 
    Skilled in Java, Go, C++, Python, JavaScript and Algorithms. 
    Strong entrepreneurship professional with a software development focused in Computer Engineering from Middle East Technical University. My adventure started with my department and my first job was developing an Alexa app for education of children who has some disabilities. After that i have started working in a company named NETAS and there I have worked for big scale projects. And then, I have worked for company named Quanimo and completed 3 different projects by myself from scratch. One of the project was a secure video platform for medicine students. And the other two was also for education, one was generating a physological reports for each student according to their exam results and the last one was a portal for hich schools. After all these I have started work for a company which produce EMG sensors. 
 I have builded a system so the system was able to work with different sensor with simultaneously with the help of processing/threading and then I was able to show extracted features from raw data on the our user interface in real-time. This is my work adventure beside these I am also enjoying to solve algorithm problems and develop something fun. For example, I developed an app named Kardo with my homemate in one night and it has 110k download. In brief, I believe that I have learned how to learn and this is the key of success and this is Me, Myself and I.`;
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography component="div" style={{ backgroundColor: "rgb(247,241,227)", minHeight: "100vh", textAlign: "center" }}>
            <NavLink to="/">
              <Typography variant="h1" component="h2" gutterBottom>
                Me, Myself and I
              </Typography>
            </NavLink>
            <Typography variant="h3" gutterBottom>
              {this.about}
            </Typography>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default Aboutme;
