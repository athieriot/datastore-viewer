import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

class Kinds extends Component {
  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="kinds">Kind</InputLabel>
        <Select
          value={this.props.value}
          // onChange={this.handleChange('namespace')}
          input={<Input id="kind" />}
        >
          <MenuItem value="">
            <em>default</em>
          </MenuItem>
          <MenuItem value={10}>partner</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default Kinds;