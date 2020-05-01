import React, { Component } from 'react';
import List from "../components/EmployeeDirectory/List"

class EmployeeDirectory extends Component {
    state = {
        employees:
        [
            {
              id: "1",
              name: "Jessica Triscut",
              position: "Manager",
              phone: "111-111-1111"
            },
            {
              id: "2",
              name: "Ryan Biscuit",
              position: "Coder",
              phone: "222-222-2222"
            },
            {
              id: "3",
              name: "Sandy Cracker",
              position: "Tester",
              phone: "333-333-3333"
            },
            {
              id: "4",
              name: "Randy Cake",
              position: "Coder",
              phone: "444-444-4444"
            },
            {
              id: "5",
              name: "Brian Crumble",
              position: "Manager",
              phone: "555-555-5555"
            },
            {
              id: "6",
              name: "Sophia Brulee",
              position: "Coder",
              phone: "666-666-6666"
            },
            {
              id: "7",
              name: "Piere Croquembouche",
              position: "Tester",
              phone: "777-777-7777"
            },
            {
              id: "8",
              name: "Violet Macaron",
              position: "Tester",
              phone: "888-888-8888"
            },
            {
              id: "9",
              name: "Terry Tart",
              position: "Coder",
              phone: "999-999-9999"
            },
          ],
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

    render() {
        return (
            <div>
                <h1>Welcome to the employee directory</h1>
                <List employees={this.state.employees}/>
            </div>
        );
    }
}

export default EmployeeDirectory;