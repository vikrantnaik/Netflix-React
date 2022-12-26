import React, { useState, useEffect } from 'react'
import './Headers.css'
import axios from './axios'
import requests from './Requests'


const Headers = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results
        [
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData()
  }, [])
  // console.log(movie);



  const charlimit = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string
  }

  return (
    <div className="header" style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>

      <div className="content">
        <h1 className="title">{movie?.name || movie?.title || movie?.originals}</h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
          <h1 className="discription">
            {charlimit(movie?.overview, 150)}
          </h1>

        </div>
      </div>
    </div>
  )
}

export default Headers