import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Hero = ({ movies }) => {
    // Check if movies is defined and is an array
    if (!Array.isArray(movies)) {
        // Return a placeholder or null if movies is not ready
        return <div>Loading...</div>;
    }

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {movies.map((movie) => (
                    <Paper key={movie.imdbId}>
                        <div className='movie-card-container'>
                            <div className='movie-card' style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                <div className='movie-detail'>
                                    <div className='movie-poster'>
                                        <img src={movie.poster} alt={movie.title} />
                                    </div>
                                    <div className='movie-title'>
                                        <h2>{movie.title}</h2>
                                    </div>
                                    <div className='movie-buttons-container'>
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length -11)}`}>
                                            <div className='play-button-icon-container'>
                                                <FontAwesomeIcon className='play-button-icon'
                                                    icon={faCirclePlay}
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </div>
    );
}

export default Hero;
