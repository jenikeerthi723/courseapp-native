import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './Actions';
import MovieDetail from './MovieDetail'
import './MovieList.css'

class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sawMovieDetail: false,
            selectedMovieId: 0
        }
    }

    componentDidMount() {
        this.props.getMovieList();
    }

    clicked = (param_movie_id) => {
        this.setState({
            selectedMovieId: param_movie_id,
            sawMovieDetail: true
        });
    }

    hideMovieDetail = () => {
        this.setState({ sawMovieDetail: false });
    }

    render() {
        console.log(this.props.movieList.items)
        let hrefLink = '#';
        return (
            <div className="container">
            {(this.state.sawMovieDetail) ?

                <MovieDetail
                    sharedMovieId={this.state.selectedMovieId}
                    onHideMovieDetail={this.hideMovieDetail} /> 
            :    
                <div className="row">
                { typeof this.props.movieList.items !== 'undefined' &&
                                        this.props.movieList.items.map((option, index) =>
                    <div key={index} className="column">
                    <div className="card">
                    <a href={hrefLink} onClick={() => this.clicked(option.id)} style={{'cursor': 'pointer'}}>
                            <img
                            className="card-img-top"
                            src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + option.poster_path}
                            alt="not found" />

                            <div className="card-body">
                                <h5 className="card-text">{option.title}</h5>
                            </div>

                        </a>
                    </div>
                    </div>
                    )}
                    </div>  
            }     
            </div>       
         )
    }
}

function mapStateToProps(state) {
    return { 
        movieList: state.movieList 
    }
}

function mapDispatchToProps (dispatch) { 
   return {
    getMovieList: () => dispatch(actionCreators.getMovieList())
   } 
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);