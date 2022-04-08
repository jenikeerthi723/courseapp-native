import React from 'react';

/*
  Simple timer that counts the time elapse since the app starts running. 
*/

class Timer extends React.Component  {
    /* The constructor(props) method is called before the component 
     is created and inserted in the DOM. The props arg holds
     attributes passed onto the component. */
    constructor(props) {
      
      /* super(props)) must be called in order to make Timer a proper React
        Component. It allows you to access/inherit the constructor method 
        of the parent class */
      super(props);
      
      /* this.state sets the initial state of the <Timer /> component.
        The component's state is an object, currently with only one property
        `secondsElapsed`. */   
      this.state = {secondsElapsed: 0}; 
  
    }
    
    /* The function tick() is a component's method. You may create methods 
      inside components like tick() and eventually pass them as a callback when 
      rendering the component, for example. */
    tick() {
      
    /* setState() is a request that: 
       1) enqueues changes to the component state and 
       2) informs react that the component and its children need to be re-rendered
       prevState , a reference to the previous state, should not be manipulated directly
       but rather should be merged by creating a new object 
       and passing it to setState. */ 
      this.setState((prevState) => ({
        secondsElapsed: prevState.secondsElapsed + 1
      }) ,   () => {  console.log('Timer '+this.state.secondsElapsed);});
    
  
    }
  
    /* The componentDidMount() method is invoked immediately after a component is mounted. 
       This is a good place to instantiate network requests from an API endpoint.
       Note that this will trigger a re-render of the component. */
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    /* The componentWillUnmount() method is invoked before a component is unmounted 
       or destroyed. This is a good place to clean up, invalidate timers, cancel 
       requests or clean up the DOM if needed. */
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
      );
    }
  }

export default Timer;