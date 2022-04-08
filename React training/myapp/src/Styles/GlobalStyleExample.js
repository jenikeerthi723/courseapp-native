import React from 'react';

class GlobalStyleExample extends React.Component {
    render() {
      return (
        <div>
            <h1> Clayfin - Global Styling !!!</h1>
            <button type="button" className = {"btn btn-success"}>Success</button>
            <button type="button" className = {"btn btn-danger"}>Danger</button>
            <button type="button" className = {"btn btn-warning"}>Warning</button>
            <button type="button" className = {"btn btn-info"}>Info</button>
        </div>
      );
    }
  }


export default GlobalStyleExample;