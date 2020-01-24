import React, { Component } from "react";
import Gallery from "react-photo-gallery";

let openUrl = e => {
  window.open(e.target.getAttribute("href"), "_newtab");
};
class Portfolio extends Component {
  render() {
    let photos = [];

    if (this.props.data) {
      this.props.data.projects.forEach(project => {
        var projectImage = "images/portfolio/" + project.image;
        photos.push({ src: projectImage, width: 1, height: 1, alt: project.title, href: project.url });
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <h1>Check Out Some of My Works.</h1>
          <Gallery photos={photos} margin={4} onClick={openUrl} />
        </div>
      </section>
    );
  }
}

export default Portfolio;
