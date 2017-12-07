import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import Card, { CardContent } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import {connect} from "react-redux";
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import {selectEntity} from "../actions/index";

const mapStateToProps = state => {
  return {
    entity: state.selection.get("entity"),
    open: !!state.selection.get("entity")
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEntityClose: () => {
      dispatch(selectEntity(null))
    }
  }
};

class Entity extends Component {

  render() {
    const {classes} = this.props;

    function Transition(props) {
      return <Slide direction="up" {...props} />;
    }

    return (
      <Dialog
        fullScreen
        open={this.props.open}
        onRequestClose={this.props.onEntityClose}
        transition={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="contrast" onClick={this.props.onEntityClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Entity
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
            <Typography>{JSON.stringify(this.props.entity)}</Typography>
          </CardContent>
        </Card>
      </Dialog>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entity);
