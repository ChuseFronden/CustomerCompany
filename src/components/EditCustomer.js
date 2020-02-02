import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstname: "",
      lastname: "",
      streetaddress: "",
      postcode: "",
      city: "",
      email: "",
      phone: "",
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
      firstname: this.props.customer.firstname,
      lastname: this.props.customer.lastname,
      streetaddress: this.props.customer.streetaddress,
      postcode: this.props.customer.postcode,
      city: this.props.customer.city,
      email: this.props.customer.email,
      phone: this.props.customer.phone
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  updateCustomer = () => {
    const newCustomers = {
      firstname: this.state.firstname,
      lastname: this.state.lastnamer,
      streetaddress: this.state.streetaddress,
      postcode: this.state.postcode,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.updateCustomer(this.props.link, newCustomers);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Car</DialogTitle>
          <DialogContent>
          <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="firstname"
              label="Firstname"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="lastname"
              label="Lastname"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="streetaddress"
              label="Streetaddress"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="postcode"
              label="Postcode"
              type="number"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="city"
              label="City"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="email"
              label="Email"
              fullWidth
            />
             <TextField
              onChange={this.handleChange}
              margin="dense"
              id="phone"
              label="Phone"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="inherit">
              Cancel
            </Button>
            <Button onClick={this.updateCustomer} color="inherit">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={this.handleClickOpen} color="inherit">
          EDIT{""}
        </Button>
      </div>
    );
  }
}