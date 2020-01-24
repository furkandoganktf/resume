import React from "react";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "./materialTitlePanel";
import SidebarContent from "./sidebarContent";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import $ from "jquery";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8,
    backgroundColor: "transparent"
  },
  content: {
    padding: "16px"
  },
  card: {
    maxWidth: 450
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: "red"
  },
  controlArea: {
    float: "right"
  },
  readButton: {
    backgroundColor: "#00d1b2",
    color: "white"
  }
};

const mql = window.matchMedia(`(min-width: 800px)`);

class Readinglist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false,
      readingList: [],
      filteredList: [],
      filterValue: "all"
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  getResumeData() {
    $.ajax({
      url: process.env.PUBLIC_URL + "/readingList.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ readingList: data.readingList.reverse(), filteredList: data.readingList.reverse() });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  CardGenerator = () => {
    let result = [];
    this.state.filteredList.forEach((element, index) => {
      result.push(
        <Grid key={index} item xs={6} sm={6} md={3} lg={3}>
          <Card style={styles.card}>
            <CardHeader title={element.title} subheader={element.dateAdded} />
            <CardMedia style={styles.media} image={element.image} title={element.title} />
            <CardContent>
              <Typography variant="h6">{element.description}</Typography>
            </CardContent>
            <CardActions style={styles.controlArea}>
              <Button size="large" style={styles.readButton} href={element.url} target="_blank">
                Read!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });

    return result;
  };

  filterList = e => {
    var filterText = e.target.innerText.toLowerCase();
    var readingList = this.state.readingList;
    var filtered = filterText === "all" ? readingList : readingList.filter(d => d.categories.includes(filterText));
    this.setState({
      filteredList: filtered,
      filterValue: filterText
    });
  };

  render() {
    const sidebar = <SidebarContent filterValue={this.state.filterValue} filterList={this.filterList.bind(this)} />;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <button onClick={this.toggleOpen} style={styles.contentHeaderMenuLink}>
            =
          </button>
        )}
        <span> Reading List</span>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    const sidebarStyles = {
      content: {
        backgroundColor: "#f1f1f1"
      }
    };

    return (
      <Sidebar styles={sidebarStyles} {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div className="content" style={styles.content}>
            <Grid container spacing={4}>
              {this.CardGenerator()}
            </Grid>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default Readinglist;
