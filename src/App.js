import React, {Component} from 'react';
import {MOVIES} from './shared/movies';
import './App.css';

const RenderMovies = ({movies}) => {
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
      movies: MOVIES
   }

  render(){
    const {movies} = this.state;
    return (
      <div className="App">
        <h1>My best movies</h1>
        <div className="search">
          <input type="text" name="search" value=""/>
          <button type="submit">search</button>
        </div>
        <div className="grid">
          <RenderMovies movies={movies} />
        </div>
      </div>
    );
  }
  
}

export default App;
