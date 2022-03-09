import React from 'react';

const HomeComponent = () => {
    return (
        <div className='container'>
          <div className='row'>
            <div className="col s6 offset-s3">
              <h2>Olá!</h2>
            </div>
            <div className="col s6 offset-s3">
              <h5>Bem-vindo ao Movie Finder</h5>
              <p>Aqui você encontra tudo sobre filmes: sinopse, capa oficial, avaliação e muito mais.</p>
            </div>
          </div>
        </div>
    )
}

export default HomeComponent;