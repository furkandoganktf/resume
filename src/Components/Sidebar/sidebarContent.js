import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./materialTitlePanel";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "General",
  "Machine Learning",
  "JavaScript",
  "Python",
  "Java",
  "C/C++",
  "Go",
  "React",
  "Node",
  "Django",
  "Spring",
  "Database",
  "UI/UX",
  "Life"
];

const styles = {
  sidebar: {
    width: 180,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "5px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  sidebarLinkSelected: {
    display: "block",
    padding: "5px 0px",
    color: "red",
    textDecoration: "none"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const SidebarContent = props => {
  const style = props.style ? { ...styles.sidebar, ...props.style } : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < categories.length; ind++) {
    links.push(
      <a key={ind} href="#top" onClick={props.filterList}>
        <li
          id={categories[ind]}
          className="sidebarLink"
          style={categories[ind].toLowerCase() === props.filterValue.toLowerCase() ? styles.sidebarLinkSelected : styles.sidebarLink}
        >
          {categories[ind]}
        </li>
      </a>
    );
  }

  return (
    <MaterialTitlePanel id="top" title="Menu" style={style}>
      <div style={styles.content}>
        <li className="sidebarLink" style={styles.sidebarLink}>
          <a href="/">Home</a>
        </li>
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
