import React from 'react';

class PropChildExample extends React.Component{
    render() {
        return (
        <>
            <Header>
                <h1>This is the header</h1>
            </Header>

            <Header>
                <h2>This is the second header</h2>
            </Header>
        </>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                {this.props.children}
            </header>
        );
    }
}


export default PropChildExample;