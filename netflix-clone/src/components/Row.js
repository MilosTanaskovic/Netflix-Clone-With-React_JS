import React, { useState, useEffect } from 'react';
// import api
import axios from '../api/axios';
import requests from '../api/requests';
// import components
import Banner from './Banner';
// import style
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = (props) => {
 const {title, fetchUrl, isLargeRow} = props;

 const [movies, setMovies] = useState([]);
 // A snippet of code wich runs based on a spacific conditions
 useEffect(() => {
  const fetchData = async () =>  {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };
  fetchData();
 }, [fetchUrl]);
 console.log(movies);
 return (
  <div className="row">
    {/* Nav */}

    {/*<Banner /> Banner */}
    
    {/* title */}
    <h2>{title}</h2>
    {/* containers -> posters */}
    <div className="row__posters">
      {movies.map((movie) => (
        <img 
        row={movie.id}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
        alt={movie.name}/>
      ))}
    </div>
  </div>
 );
}

export default Row;