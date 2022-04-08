import React from 'react';

class InlineStyleExample1 extends React.Component {
    render() {
      return (
        <div style={ {width: "500px" ,  margin: "auto" , textAlign: "center" , border: "3px solid #73AD21"} }>
        <h1 style={ {color: "red" , backgroundColor: "lightblue"} }>Inline Style !!!</h1>
        </div>
      );
    }
  }


export default InlineStyleExample1;