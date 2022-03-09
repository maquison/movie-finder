import React from 'react';

const MovieInfoComponent = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i className='fa fa-arrow-left' style={{color: "purple"}}></i>
                <span style={{marginLeft: 10, color: "purple"}}>Voltar</span>
            </div>
            <div className='card'>
                <div className="row" >
                    <h4 style={{padding: 10}}>{props.currentMovie.title}</h4>
                    <div className='col s12 m4'>
                        {props.currentMovie.poster_path === null ? <img src={"https://www.cursosresportes.com.br/wp-content/uploads/2021/07/for-website.jpg"} alt="card-name" style={{ width: "100%", height: 500 }} /> : 
                        <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card-name" style={{ width: "100%", height: 500 }} />}
                    </div>
                    <div className='col s12 m8'>
                        <div className='info-container'>
                            <p style={{marginTop: 10}}><b>Titulo Original:</b></p>
                            <p>{props.currentMovie.original_title}</p>
                            <p style={{marginTop: 50}}><b>Data de Lançamento:</b></p>
                            <p>{props.currentMovie.release_date}</p>
                            <p style={{marginTop: 50}}><b>Sinopse:</b></p>
                            <p>{props.currentMovie.overview}</p>
                            <p style={{marginTop: 50}}><b>Avaliação:</b></p>
                            <p><i className='fa fa-star' style={{color: "gold"}}></i> <b>{props.currentMovie.vote_average}</b>/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoComponent;