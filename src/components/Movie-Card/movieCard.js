import React from 'react';
import './movieCard.css'

function MovieCard({ item, onClick }) {
    return (
        <div className='movie-item' onClick={onClick ? onClick : null}>
            <img src={item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title} className='movie-item__img' />
            <p className='movie-item__title'>{item.title || item.name}</p>
        </div>
    );
}

export default MovieCard;