import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import {selectKind} from "../actions/index";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    kind: state.selection.get("kind"),
    kinds: state.repository.get("kinds")
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onKindChange: kind => {
      dispatch(selectKind(kind))
    }
  }
};

class Kinds extends Component {

  componentDidMount() {
    this.props.onKindChange(this.props.initValue)
  }

  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="kinds">Kind</InputLabel>
        <Select
          value={this.props.kind}
          onChange={event => this.props.onKindChange(event.target.value)}
          input={<Input id="kind" />}
        >
          {this.props.kinds.map(k =>
            <MenuItem key={k} value={k}>{k}</MenuItem>
          )}
        </Select>
      </FormControl>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kinds);