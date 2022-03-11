import React from 'react';

const SearchComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s6 offset-s3">
                    <p><b>Busque um filme para começar:</b></p>
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <i className="material-icons prefix" style={{color: 'purple'}}>search</i>
                            <input value={props.term} placeholder="Pesquise pelo nome do filme..." type="text" onChange={props.handleChange} />
                            {
                                props.suggestions && props.suggestions.map((s, i) => {
                                    return(
                                        <div className='suggestion' key={i} onClick={() => props.selectSuggestion(s.id, s.title)}>
                                            <span style={{margin: 5}}>{s.title}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchComponent;