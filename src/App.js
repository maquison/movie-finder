import React, { Component } from 'react';
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponet';
import SearchComponent from './components/SearchComponent';
import ListComponent from './components/ListComponent';
import PaginationComponent from './components/PaginationComponent';
import MovieInfoComponent from './components/MovieInfoComponent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchMovie: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
      suggestions: []
    }
    this.apiKey = process.env.REACT_APP_TMDB_API
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${this.apiKey}&query=${this.state.searchMovie}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({movies: [...data.results], totalResults: data.total_results})
    })
    this.setState({suggestions: []})
  }

  handleChange = (e) => {
    this.setState({searchMovie: e.target.value})
    if (e.target.value !== '') {
      fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${this.apiKey}&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({suggestions: [...data.results]})
      })
    }
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${this.apiKey}&query=${this.state.searchMovie}&page=${pageNumber}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({movies: [...data.results], currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    this.setState({currentMovie: newCurrentMovie})
  }

  closeMovieInfo = () => {
    this.setState({currentMovie: null})
  }

  selectSuggestion = (id, suggestion) => {
    this.setState({searchMovie: suggestion})
    this.setState({suggestions: []})
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({movies: [data]})
    })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App purple lighten-5">
        <NavComponent />
        {
        this.state.currentMovie === null ? <div><HomeComponent /> 
        <SearchComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} suggestions={this.state.suggestions} selectSuggestion={this.selectSuggestion} term={this.state.searchMovie}/>
        <ListComponent viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfoComponent currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />
        }
        {this.state.totalResults > 20 && this.state.currentMovie === null ? <PaginationComponent pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
      </div>
    );
  }
}

export default App;
