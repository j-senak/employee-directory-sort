import React, { Component } from "react";
import List from "../components/EmployeeDirectory/List";

class EmployeeDirectory extends Component {
  state = {
    employees: [
      {
        id: "1",
        name: "Jessica Triscut",
        position: "Manager",
        phone: "111-111-1111",
      },
      {
        id: "2",
        name: "Ryan Biscuit",
        position: "Coder",
        phone: "222-222-2222",
      },
      {
        id: "3",
        name: "Sandy Cracker",
        position: "Tester",
        phone: "333-333-3333",
      },
      {
        id: "4",
        name: "Randy Cake",
        position: "Coder",
        phone: "444-444-4444",
      },
      {
        id: "5",
        name: "Brian Crumble",
        position: "Manager",
        phone: "555-555-5555",
      },
      {
        id: "6",
        name: "Sophia Brulee",
        position: "Coder",
        phone: "666-666-6666",
      },
      {
        id: "7",
        name: "Piere Croquembouche",
        position: "Tester",
        phone: "777-777-7777",
      },
      {
        id: "8",
        name: "Violet Macaron",
        position: "Tester",
        phone: "888-888-8888",
      },
      {
        id: "9",
        name: "Terry Tart",
        position: "Coder",
        phone: "999-999-9999",
      },
    ],
    searchTerm: "",
  };

  // Writing down axios call in case we want a 3rd Party API and for practice
  // componentDidMount() {
  //     this.getEmployees();
  // }

  // getEmployees = () => {
  //     axios
  //     .get("apiURL")
  //     .then((response) => {
  //         this.setState({
  //             employees: response.data.data,
  //         });
  //     }).catch((err) => {
  //         console.log(err);
  //     });
  // }

//   constructor(props) {
//     super(props.name)
//     this.state = { EmployeeDirectory }
//     this.sortByNameAsc = this.sortByNameAsc.bind(this);
//     this.sortByNameDesc = this.sortByNameDesc.bind(this);
//   }


  sortByNameAsc() {
    this.setState((prevState) => {
      this.state.employees.sort((a, b) => a.name - b.name);
    });
  }

  sortByNameDesc() {
    this.setState((prevState) => {
      this.state.employees.sort((a, b) => b.name - a.name);
    });
  }

  clearFilter = () => {
    this.setState({
      employees: this.state.employees,
      searchTerm: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm);
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter((employee) => {
      // return employee.name.includes(this.state.searchTerm);
      const regex = new RegExp(this.state.searchTerm, "gi");
      return employee.name.match(regex);
    });
    this.setState({
      employees: filteredEmployees,
    });
  };

  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <div className="container">
          <div className="row">
            <div className="col col-bg">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Employees"
                    name="searchTerm"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              {this.state.searchTerm.length > 0 && (
                <button
                  className="btn btn-secondary"
                  onClick={this.clearFilter}
                >
                  Clear Filter
                </button>
              )}
              <button onClick={this.sortByNameAsc}>Sort by Name Up</button>
              <button onClick={this.sortByNameDesc}>Sort by Name Down</button>
            </div>
          </div>
        </div>
        <List employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeDirectory;
