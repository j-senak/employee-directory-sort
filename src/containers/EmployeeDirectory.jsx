import React, { Component } from 'react';
import List from "../components/EmployeeDirectory/List"

class EmployeeDirectory extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the employee directory</h1>
                <List/>
            </div>
        );
    }
}

export default EmployeeDirectory;