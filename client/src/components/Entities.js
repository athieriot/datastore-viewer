import React, {Component} from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import {connect} from "react-redux";
import Paper from 'material-ui/Paper';
import {List} from 'immutable';

const MAX_NUMBER_OF_COLUMNS = 4;

function extractColumnNames(state) {
  let columns = List();
  let first = state.repository.get('entities')[0] || {};

  for (let property in first) {
    if (first.hasOwnProperty(property)) {
      columns = columns.push(property)
    }
  }
  return columns;
}

const mapStateToProps = state => {
  return {
    loading: state.repository.get("loading"),
    columns: extractColumnNames(state).filter(c => c !== "key").take(MAX_NUMBER_OF_COLUMNS),
    entities: state.repository.get("entities")
  };
};

class Viewer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              {this.props.columns.map(column => {
                return (
                  <TableCell key={column}><strong>{column}</strong></TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.entities.map(entity => {
              return (
                <TableRow key={entity.key}>
                  <TableCell>{entity.key}</TableCell>
                  {this.props.columns.map(column => {
                    return (
                      <TableCell key={entity.key+column}>{JSON.stringify(entity[column])}</TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default connect(mapStateToProps)(Viewer);