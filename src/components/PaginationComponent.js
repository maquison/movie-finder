import React from 'react';

const PaginationComponent = (props) => {
    const pageLinks = []

    for(let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage === i ? 'Active' : '';
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href='#'>{i}</a></li>)
    }
    return (
        <div className="container">
            <div className="row">
                <ul className='pagination'>
                    {props.currentPage > 1 ? <li className={'waves-effect'} onClick={() => props.nextPage(props.currentPage - 1)}><a href='#'>Ant</a></li> : ''}
                    {pageLinks}
                    {props.currentPage < props.page + 1 ? <li className={'waves-effect'} onClick={() => props.nextPage(props.currentPage + 1)}><a href='#'>Prox</a></li> : ''}
                </ul>
            </div>
        </div>
    )
}

export default PaginationComponent;