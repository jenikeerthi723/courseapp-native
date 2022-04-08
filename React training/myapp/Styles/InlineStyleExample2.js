import React from 'react';

class InlineStyleExample2 extends React.Component {
    render() {
    var styles =  {
        div:{
                width: "500px" ,  
                margin: "auto" , 
                textAlign: "center" , 
                border: "3px solid #73AD21"
            },
        h1: {
                backgroundColor: 'blue'
            }
    };
      return (
        <div style={ styles.div }>
        <h1 style={ styles.h1  }>Clayfin - Inline Styling !!!</h1>
        </div>
      );
    }
  }


export default InlineStyleExample2;
