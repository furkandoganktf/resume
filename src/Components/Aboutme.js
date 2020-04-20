import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { NavLink } from "react-router-dom";

class Aboutme extends Component {
  constructor(props) {
    super(props);
    this.aboutPart1 =
      "I'm Furkan Doğan. I'm Ankara based Software Developer. Experienced Partner with a demonstrated history of working in the software industry.Skilled in Java, Go, Python, JavaScript and Algorithms. Strong entrepreneurship professional with a software development focused in Computer Engineering from Middle East Technical University. My adventure started with my department and my first job was developing an Alexa app for education of children who have some disabilities. After that i have started working in a company named NETAS and there I have worked for big scale projects. And then, I have worked for company named Quanimo and completed 3 different projects by myself from scratch. One of the project was a secure video platform for medicine students. And the other two was also for education, one was generating a psychological reports for each student according to their exam results and the last one was an online education portal for high schools. After all these I have started work for a company which produce EMG sensors. I have builded a system architecture so the system was able to work with different sensor with simultaneously with the help of processing/threading and then I was able to show extracted features from raw data on the our user interface in real-time. Firstly I decided to use Python to get the data from the sensors and process them with the help of ML, then I had to find a DBMS which can work with the time-series data. I have worked with PostgreSQL and MongoDB before but I thought I don’t need them so I have started to search. I have found a DBMS named RethinkDB which was makes building and scaling realtime apps dramatically easier. Then I have choose a template for React and decided to use NodeJS as a server. So I was getting the data from sensors simultaneously then processing it and saving to RethinkDB and with the help of change feed functionality of RethinkDB I was able to get recent data with NodeJS and then sending data to React with sockets. System was working perfectly without any delay issue and we started to try this system with English Premier League football clubs like Liverpool, Chelsea and Crystal Palace, they love it. This is my work adventure and beside these I am also enjoying to solve algorithm problems and develop something fun. For example, I developed an app named Kardo with my home-mate in one night and now it has like 120k download. In brief, I love creating systems that solve a real-life problem that’s why I want to be part of ";
    this.aboutPart2 = " and in later times working as ";
    this.aboutPart3 = ", I believe that I have learned how to learn and this is the key of success and this is Me, Myself and ";
    this.url1 = "https://www.toptal.com/full-stack";
    this.url2 = "https://www.toptal.com/software-architect";
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container style={{ margin: 0, padding: 0, maxWidth: "100%" }}>
          <Typography component="div" style={{ backgroundColor: "rgb(247,241,227)", minHeight: "100vh", textAlign: "center" }}>
            <NavLink to="/">
              <Typography variant="h1" component="h2" gutterBottom>
                Me, Myself and <a href="/">/</a>
              </Typography>
            </NavLink>
            <Typography variant="h3" gutterBottom style={{ margin: 0 }}>
              {this.aboutPart1}
              <Link href={this.url1} target="_blank">
                Full-Stack Developer Network
              </Link>
              {this.aboutPart2}
              <Link href={this.url2} target="_blank">
                Software-Architect
              </Link>
              {this.aboutPart3}
              <Link href="/">/</Link>
            </Typography>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default Aboutme;
