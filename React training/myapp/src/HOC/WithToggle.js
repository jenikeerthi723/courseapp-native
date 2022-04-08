import React from 'react';

const WithToggle = (WrappedComponent) =>
  class WithToggleClass extends React.Component {
    state = {
      toggleStatus: false,
    }
    constructor() {
      super()
      this.toggle = this.toggle.bind(this)
    }
    toggle() {
      this.setState({
        toggleStatus: !this.state.toggleStatus
      })
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          toggle={this.toggle}
          toggleStatus={this.state.toggleStatus}
        />
      )
    }
}

export default WithToggle;