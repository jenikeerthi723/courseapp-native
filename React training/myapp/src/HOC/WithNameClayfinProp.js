import React from 'react';  

function WithNameClayfinProp(WrappedComponent) {
    // And return a new anonymous component
    return class extends React.Component {
      render() {
        return <WrappedComponent name="Clayfin" {...this.props} />;
      }
    };
  }

export default WithNameClayfinProp;