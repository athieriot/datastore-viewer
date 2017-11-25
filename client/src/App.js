import React, {Component} from 'react';
import Viewer from "./components/Viewer";
import {withStyles} from "material-ui";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { red, green } from 'material-ui/colors';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const primary = red[500];

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
