import React, {Component} from 'react';
import {MOVIES} from './shared/movies';
import './App.css';

const RenderMovies = ({movies}) => {
  if(movies.length === 0)
    return <p className="noresult">No result is found!</p>
  return (
     movies.map( movie => {
       return (<div key={movie.id} className="movie">
                <img src={movie.image} alt={movie.name} />
                <h3>{movie.name}</h3>
              </div>);
     })
  );
}

class App extends Component {

   state = {
      movies: MOVIES,
      search: ''
   }

   onChange = (e) => {      
      this.setState({search: e.target.value});
   }

   filteredMovies = (movies) => {
      const {search} = this.state;
      return movies.filter(movie => movie.name.toLocaleLowerCase()
      .search(search.toLocaleLowerCase()) !== -1);
   }

  render(){
    //console.log(this.state.search);
    const {movies} = this.state;
    return (
      <div className="App">
        <h1>My best movies</h1>
        <div className="search">
          <input type="text" name="search" onChange={this.onChange} value={this.state.search}/>
          <button type="submit">search</button>
        </div>
        <div className="grid">
          <RenderMovies movies={this.filteredMovies(movies)} />
        </div>
      </div>
    );
  }
  
}

export default App;
