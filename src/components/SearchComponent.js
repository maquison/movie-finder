import React from 'react';

const SearchComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s6 offset-s3">
                    <p><b>Busque um filme para começar:</b></p>
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Pesquise pelo nome do filme..." type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchComponent;