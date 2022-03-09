import React from 'react';
import MovieComponent from './MovieComponent';

const ListComponent = (props) => {
    return (
        <div className="conteiner">
            <div className="row">
                <div className="col s12">
                    { 
                        props.movies.map((movie, i) => {
                            return (
                                <MovieComponent key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ListComponent;