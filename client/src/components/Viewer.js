import React, {Component} from 'react';
import Namespaces from "./Namespaces";
import Kinds from "./Kinds";
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import {connect} from "react-redux";
import Paper from 'material-ui/Paper';
import { List } from 'immutable';

//TODO: Split Entity table in another Component
const mapStateToProps = state => {
  let columns = List();

  let first = state.repository.get('entities')[0] || {};


  console.log(first);
  for (let property in first) {
    if (first.hasOwnProperty(property)) {
      columns = columns.push(property)
    }
  }
  console.log(columns);

  return {
    loading: state.repository.get("loading"),
    columns: columns.filter(c => c !== "key").take(4),
    entities: state.repository.get("entities")
  };
};

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
          <Grid item xs={12}>
            <Paper>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name/ID</TableCell>
                    {this.props.columns.map(c => {
                      return (
                        <TableCell key={c}>{c}</TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.entities.map(n => {
                    return (
                      <TableRow key={n.key}>
                        <TableCell>{n.key}</TableCell>
                        {this.props.columns.map(c => {
                          return (
                            <TableCell key={n.key+c}>{n[c]}</TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(mapStateToProps)(Viewer);