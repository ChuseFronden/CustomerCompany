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
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  addCusomers = () => {
    const newCustomers = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      streetaddress: this.state.streetaddress,
      postcode: this.state.postcode,
      city: this.state.city,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.saveCustomers(newCustomers);
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
          <DialogTitle id="form-dialog-title">Add New Customer</DialogTitle>
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
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addCustomer} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={this.handleClickOpen} color="primary">
          ADD CUSTOMER{" "}
        </Button>
      </div>
    );
  }
}