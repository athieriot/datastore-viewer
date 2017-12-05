import React, {Component} from 'react';
import Viewer from "./components/Viewer";
import {withStyles} from "material-ui";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    margin: 10,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  truncate: {
    width: 350,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }
});

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Google Datastore Viewer
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Viewer classes={ classes } />
        </div>
      </div>
    );
  }
}

export default  withStyles(styles)(App);
