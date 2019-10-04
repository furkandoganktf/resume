import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <Grid key={projects.title} item xs={4}>
          <div key={projects.title} className="columns">
            <div className="portfolio-item" >
              <div className="item-wrap " >
                <a href={projects.url} target="_blank" rel="noopener noreferrer" title={projects.title}>
                  <img alt={projects.title} src={projectImage} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>
          </div>
        </Grid>
      })
    }

    return (
      <section id="portfolio">




        <div className="row">

          {/* <div className="twelve columns collapsed"> */}

          <h1>Check Out Some of My Works.</h1>
          {/* <p style={{textAlign:"center"}}>{portfoliomessage}
            </p> */}
          <Grid container spacing={1}>
            <Grid container >
              {/* <Grid container justify="center" spacing={2}> */}
              {projects}
              {/* </Grid> */}
            </Grid>
          </Grid>
          {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div> */}
          {/* </div> */}
        </div>
      </section>
    );
  }
}

export default Portfolio;
