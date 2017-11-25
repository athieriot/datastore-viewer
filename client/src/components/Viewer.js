import React, {Component} from 'react';
import Namespaces from "./Namespaces";
import Kinds from "./Kinds";
import Grid from 'material-ui/Grid';

class Viewer extends Component {

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <Grid container spacing={24}>
            <Grid item xs={12} sm={2}>
              <Namespaces classes={classes} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Kinds classes={classes}/>
            </Grid>
        </Grid>
      </form>
    );
  }
}

export default Viewer;