import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Viewer from "./components/Viewer";
import {withStyles} from "material-ui";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class App extends Component {

  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.value });
  // };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google Datastore Viewer</h1>
        </header>
        <Viewer classes={ classes } />
      </div>
    );
  }
}

export default  withStyles(styles)(App);
