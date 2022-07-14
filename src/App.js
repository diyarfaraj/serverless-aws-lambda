import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class App extends Component {
  state = {
    isLoading: false,
    invoices: [
      {
        id: "100",
        vendor: "Nike",
        amount: "124.00",
        date: "2022-03-12",
      },
      {
        id: "130",
        vendor: "Puma",
        amount: "144.00",
        date: "2022-11-12",
      },
      {
        id: "150",
        vendor: "Adidas",
        amount: "124.00",
        date: "2022-02-12",
      },
    ],
  };

  remove(id) {
    console.log(id);
  }

  render() {
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;

    if (isLoading) return <div>Loading ...</div>;

    let mappedInvoices = allInvoices.map((invoice) => (
      <tr key={invoice.id}>
        <td>{invoice.vendor}</td>
        <td>{invoice.amount}</td>
        <td>{invoice.date}</td>
        <td>{invoice.vendor}</td>
        <td>
          <Button
            className="btn btn-lg btn-success"
            onClick={() => this.remove(invoice.id)}
          >
            OK
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-danger"
            onClick={() => this.remove(invoice.id)}
          >
            NO{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            percent
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-warning"
            onClick={() => this.remove(invoice.id)}
          >
            IMAGe
          </Button>
        </td>
      </tr>
    ));

    return (
      <div className="container border border-secondary rounded center">
        <div className="row">
          <div className="col-12">
            <h4>Pending invoices - the test company</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Invoice nr</th>
                <th>data</th>
                <th colSpan="4">Action</th>
                <th>data</th>
              </thead>
              <tbody>
                {this.state.invoices.length === 0 ? (
                  <td colSpan={9}>All cought up!</td>
                ) : (
                  mappedInvoices
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
