import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'

const Row = ({ title, fetchData, isLarge }) => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function url() {
            const request = await axios.get(fetchData);
            setMovie(request.data.results)
            return request
        }
        url();
    }, [fetchData])

    const baseurlimg = "https://image.tmdb.org/t/p/original/"

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="rows">
                {movie.map(movies => {
                    return <img src={`${baseurlimg}${isLarge ? movies.poster_path : movies.backdrop_path}`} alt={movies?.name} key={movies.id} className="row_poster" />
                }
                )}
            </div>
        </div>
    )
}

export default Row


