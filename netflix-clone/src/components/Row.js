import React, { useState, useEffect } from 'react';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
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
 const [trailerUrl, setTrailerUrl ] = useState("");
 // A snippet of code wich runs based on a spacific conditions
 useEffect(() => {
  const fetchData = async () =>  {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };
  fetchData();
 }, [fetchUrl]);

 // youtube
 const opts = {
  height: "390",
  width: "100%",
  playerVars: {

    autoplay: 1,
  },
 };

 const handleClick = (movie) => {
   if (trailerUrl) {
     setTrailerUrl("");
   }else {
     movieTrailer(movie?.name || "")
     .then((url) => {

      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get("v"));  
     })
     .catch((error) => console.log(error));
   }
 }
 //console.log(movies);
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
        key={movie.id}
        onClick={() => handleClick(movie)}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
        alt={movie.name}/>
      ))}
    </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  </div>
 );
}

export default Row;