import React from 'react';

const MovieComponent = (props) => {
    return (
        <div className='col s12 m6 l3'>
            <div className='card'>
                <div className='card-image waves-effect waves-block waves-light'>
                    {
                        props.image == null ? <img src={"https://www.cursosresportes.com.br/wp-content/uploads/2021/07/for-website.jpg"} alt="card-name" style={{ width: "100%", height: 500 }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card-name" style={{ width: "100%", height: 500 }}/>
                    }
                </div>
                <div className='card-content'>
                    <p><a href='#' onClick={() => props.viewMovieInfo(props.movieId)}>Ver Detalhes</a></p>
                </div>
            </div>
        </div>
    )
}

export default MovieComponent;