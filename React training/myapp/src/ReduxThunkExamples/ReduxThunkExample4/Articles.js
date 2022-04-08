import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ToDoActionCreators from './Actions';
import LoadingSpinner from './LoadingSpinner'

export class Articles extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.errMessage) {
      return ( <i style={
                    { margin:"10px 22px",
                      fontSize:"2em",
                      verticalAlign:"middle",
                      color: "#D8000C",
                      backgroundColor: "#FFD2D2"}}>
                      {this.props.errMessage} </i>
      )
   }
    return (
      <>
      {this.props.loading ? <LoadingSpinner /> 
       :
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}> {el.id} - <strong>{el.title}</strong> - {el.body} </li>
        ))}

        {this.props.remotearticles.map(el => (
          <li key={el.id}> {el.id} - <strong>{el.title}</strong> - {el.body} </li>
        ))}
      </ul>
      }   
      </>
    );
    }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    remotearticles: state.remoteArticles,
    loading: state.loading,
    errMessage : state.error
  };
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(ToDoActionCreators.getData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);