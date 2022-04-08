import React from 'react';

class SingleElementForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            name: ''
        };
    }

    onChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div style={ {width: "500px" ,  margin: "auto" , textAlign: "center" }}>
                <label style={{padding: "40px"}} htmlFor='name-input'>Name: </label>
                <input
                    id='name-input'
                    onChange={this.onChange}
                    value={this.state.name} />
                <p></p>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default SingleElementForm;