import React, {Component} from 'react';
import Namespaces from "./Namespaces";
import Kinds from "./Kinds";
import Grid from 'material-ui/Grid';
import Entities from "./Entities";
import {Route} from "react-router-dom";

class Viewer extends Component {

  render() {
    const {classes} = this.props;

    return (
      <form autoComplete="off">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Route path="/namespaces/:namespace" children={({ match }) => (
              <Namespaces initValue={match ? match.params.namespace : false} classes={classes}/>
            )}/>
          </Grid>
          <Grid item xs={12}>
            <Route path="/namespaces/:namespace/kinds/:kind" children={({ match }) => (
              <Kinds initValue={match ? match.params.kind : false} classes={classes}/>
            )}/>
          </Grid>
          <Grid item xs={12}>
            <Entities classes={classes}/>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default Viewer;
