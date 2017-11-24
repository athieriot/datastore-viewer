import React, {Component} from 'react';
import Namespaces from "./Namespaces";
import Kinds from "./Kinds";

class Viewer extends Component {

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off" className={classes.container}>
        <Namespaces value='default' classes={classes} />
        <Kinds value='' classes={classes}/>
      </form>
    );
  }
}

export default Viewer;