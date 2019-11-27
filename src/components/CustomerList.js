import React, { Component } from "react";
import "react-table/react-table.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";



export default class componentName extends Component {
    constructor(props) {
      super(props);
      this.state = { content: [], message: "" };
    }
    componentDidMount() {
     // fetch("https://customerrest.herokuapp.com/api/customers")
     // .then(response => response.json())
    //  .then(jsondata => this.setState({ cars: jsondata._embedded.cars }))
     // .catch(err => console.error(err));
     this.loadCustomers();
    }
  
    loadCustomers = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
          .then(response => response.json())
          .then(jsondata => this.setState({ cars: jsondata._embedded.content }))
          .catch(err => console.error(err));
      };


      deleteCustomers = customerLink => {
        fetch(customerLink.original._links.self.href, { method: "DELETE" })
          .then(this.loadCars())
    
          .catch(err => console.error(err));
        console.log(customerLink.original._links.self.href);
      };


      updatedCustomers = (link, updatedCustomers) => {
        fetch(link, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedCustomers)
        })
          .then(res => this.loadCustomers())
          .then(res => this.setState({ open: true, message: "Updated new customers" }))
          .catch(err => console.error(err));
      };


      saveCustomers = customers => {
        fetch("https://customerrest.herokuapp.com/api/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(customers)
        })
          .then(res => this.loadCustomers())
          .then(res => this.setState({ open: true, message: "Added new customer" }))
          .catch(err => console.error(err));
      };


      handleClose = () => {
        this.setState({ open: false });
      };
   
    render() {
      const columns = [
        { Header: "Firstname", accessor: "firstname" },
        { Header: "Lastname", accessor: "lastname" },
        { Header: "Streetaddress", accessor: "streetaddress" },
        { Header: "Postcode", accessor: "postcode" },
        { Header: "City", accessor: "city" },
        { Header: "Email", accessor: "email" },
        { Header: "Phone", accessor: "phone" },
        {
          Header: "",
          accessor: "_links.self.href",
          filterable: "false",
          sortable: "false",
          width: 100,
          Cell: ({ value, row }) => (
            <EditCustomer updatedCustomers={this.updatedCustomers} link={value} car={row} />
          )
        },
        {
          Header: "",
          accessor: "_links.self.href",
          filterable: "false",
          sortable: "false",
          width: 100,
          Cell: value => (
            <Button color="secondary" onClick={() => this.deleteCustomers(value)}>
              Delete
            </Button>
          )
        }
      ];
      return (
        <div>
          <AddCustomer saveCustomers={this.saveCustomers} />
          <ReactTable
            data={this.state.customers}
            columns={columns}
            filterable={true}
          />

        </div>
      );
    }
  }