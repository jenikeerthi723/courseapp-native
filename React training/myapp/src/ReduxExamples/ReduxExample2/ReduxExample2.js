import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './Actions'
import AddEmployee from './AddEmployee';

class ReduxExample2 extends React.Component {
    
    render () {
        console.log(this.props.emps)
        return (
            <div style={{width: "50%", margin: "auto", textAlign: "center", padding: "20px", backgroundColor: "lightgrey"}}>
                <AddEmployee employeeAdded={this.props.onAddedEmployee} />
                {this.props.emps.map(emp => (
                <div key= {emp.id} style={{padding: "10px", margin: "10px auto", border: "1px solid #eee",boxShadow: "0 2px 2px #ccc", boxSizing: "border-box", width: "80%", textAlign: "center", borderColor: "blue"}} >
                    <h1>First Name : {emp.fname}</h1>
                    <h2>Last Name : {emp.lname}</h2>
                    <button onClick={()=>this.props.onRemovedEmployee(emp.id)}>Delete</button>
                </div>
                 ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        emps: state.emps
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedEmployee: (fname, lname) => dispatch(actionCreators.add_employee(fname, lname)),
        onRemovedEmployee: (id) => dispatch(actionCreators.delete_employee(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample2);