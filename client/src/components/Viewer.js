import React, {Component} from 'react';
import Namespaces from "./Namespaces";
import Kinds from "./Kinds";
import Grid from 'material-ui/Grid';
import Entities from "./Entities";

class Viewer extends Component {

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Namespaces classes={classes} />
          </Grid>
          <Grid item xs={12}>
            <Kinds classes={classes}/>
          </Grid>
          <Grid item xs={12}>
            <Entities classes={classes} />
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default Viewer;
