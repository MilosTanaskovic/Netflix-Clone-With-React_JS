import React, { useEffect, useState } from 'react'
// import api
import axios from '../api/axios';
import requests from '../api/requests';
// import css
import "./Banner.css";

const Banner = () => {
 const [movie, setMovie] = useState([]);

 useEffect(() => {
  const fetchData = async () =>  {
    const request = await axios.get(requests.fetchNetflixOriginals);
   setMovie(
    request.data.results[
      Math.floor(Math.random() * request.data.results.length - 1)
   ]
   );
    return request;
  };
  fetchData();
 }, [])
 //console.log(movie);

 const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
 }
 return (
  <header className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
      backgroundPostion: "center center",
    }}
  >

   <div className="banner__contents">
   {/* Title */}
    <h1 className="banner__title">
      {movie?.title || movie?.name || movie?.original_name }
    </h1>
   {/* Buttons */}
    <div className="banner__buttons">
      <button className="banner__button">Play</button>
      <button className="banner__button">My List</button>
    </div>
   {/* Description */}
    <h1 className="banner__description">{movie?.overview}</h1>
   </div>

   <div className="banner--fadeBottom"/>
  </header>
  
 )
}

export default Banner
