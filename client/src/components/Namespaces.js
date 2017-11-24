import React, {Component} from 'react';
import {MenuItem} from 'material-ui/Menu';
import Select from 'material-ui/Select';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import {connect} from "react-redux";
import {selectNamespace} from "../actions/index";

const mapStateToProps = state => {
  return {
    namespace: state.selection.get("namespace")
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNamespaceChange: namespace => {
      dispatch(selectNamespace(namespace))
    }
  }
};

class Namespaces extends Component {

  render() {
    const {classes} = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="namespace">Namespace</InputLabel>
        <Select
          value={this.props.namespace}
          onChange={event => this.props.onNamespaceChange(event.target.value)}
          input={<Input id="namespace"/>}
        >
          <MenuItem value="default">
            <em>default</em>
          </MenuItem>
          <MenuItem value={"partner-service"}>partner-service</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Namespaces);