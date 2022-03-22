import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../Api/Api';
import './SeeMore.css'

function SeeMore({ id }) {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setFilms(data.results.slice(0, 5)))
    }, [])
    return (
        <div>
            <h2 className='see-more__title' style={{ color: '#fff' }}>See More</h2>
            {films.length > 0 &&
                films.map((item, index) => {
                    return (
                        <Link key={index} to={`/detail/movie/${item.id}`}>
                            <div className='see-more'>
                                <img className='see-more__img' src={item.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                    : `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                    alt={item.title} />
                                <p className='see-more__name'>{item.title || item.name}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}
export function SeeMoreTV({ id }) {
    const [seasons, setSeasons] = useState([])
    useEffect(() => {
        fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data =>
                setSeasons(data.seasons)
            )
    }, [])
    return (
        <div>
            <h2 className='see-more__title' style={{ color: '#fff' }}>See More</h2>
            {seasons.length > 0 &&
                seasons.map((item, index) => {
                    return (
                        <Link key={index} to={`/watch/tv/${id}/seasons/${item.season_number}/episodes/0`}>
                            <div className='see-more'>
                                <img className='see-more__img' src={item.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                    : `data:image/jpeg;base64,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`}
                                    alt={item.title} />
                                <p className='see-more__name'>{item.title || item.name}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );

}

export default SeeMore;