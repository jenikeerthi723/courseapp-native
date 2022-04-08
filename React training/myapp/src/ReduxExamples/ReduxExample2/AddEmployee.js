import React from 'react';

class ReduxExample2AddEmployee extends React.Component {
    state = {
        fname: '',
        lname: ''
    }

    fnameChangedHandler = (event) => {
        this.setState({fname: event.target.value});
    }

    lnameChangedHandler = (event) => {
        this.setState({lname: event.target.value});
    }
    onClickHandler =  () => {
        this.props.employeeAdded(this.state.fname, this.state.lname);
        this.setState({fname:'',lname: ''});
    }

    render () {
        return (
        <div style={{textAlign: "center",margin: "30px" }}>
            <input style= {{margin:"10px",padding:"15px"}}
                type="text" 
                placeholder="First Name" 
                onChange={this.fnameChangedHandler}
                value={this.state.fname} />
            <input 
                style= {{margin:"10px",padding: "15px"}}
                type="text" 
                placeholder="Last Name"
                onChange={this.lnameChangedHandler}
                value={this.state.lname} />
            <button style= {{margin:"10px",padding:"15px"}} onClick={this.onClickHandler}>Add Employee</button>
        </div>
    );
    }
}

export default ReduxExample2AddEmployee;