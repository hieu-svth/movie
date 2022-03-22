import React from 'react';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../../components/Api/Api';
import SeeMore, { SeeMoreTV } from '../../components/SeeMore/SeeMore';
import Similar from '../../components/Similar/Similar';
import './Watch.css'


function WatchTV() {
    const params = useParams()
    const { id, season, episode } = params
    console.log(season, episode)

    const [watchTV, setWatchTV] = useState({})
    const [seasons, setSeasons] = useState([])
    const [episodes, setEpisodes] = useState([])
    const currSeason = seasons.find(item => item.season_number == season)
    console.log(currSeason)
    useEffect(() => {
        fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setWatchTV(data)
                setSeasons(data.seasons)
            })
    }, [])
    useEffect(() => {
        fetch(`${BASE_URL}/tv/${id}/season/${season}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setEpisodes(data.episodes))
    }, [season])
    return (
        <div className='watch gird wide' style={{ backgroundColor: '#333' }}>
            <div className='watch__wrap'>
                <div className='watch__movie'>
                    <iframe
                        src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season}&e=${episode}`}
                        className='watch__movie-film'
                        title='Play Movie'
                    />
                    <div className='watch__content'>
                        {seasons.length > 0 && <div>
                            <h1 className='watch__title'>{currSeason.name}</h1>
                            <p className='watch__overview'>{watchTV.overview}</p>
                            <p className='watch__release'>Release date: {currSeason.air_date}</p>
                        </div>
                        }
                        <h1 className='watch__episode'>Episode</h1>
                        {episodes.length != 0 && episodes.map((item, index) => {
                            return (
                                <Link key={index} to={`/watch/tv/${id}/seasons/${item.season_number}/episodes/${item.episode_number}`}>
                                    <button className='watch__content-item'>{item.episode_number}</button>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className='watch__seemore'>
                    <SeeMoreTV id={id} />

                </div>
            </div>
            <div className='watch__similar'>
                <div className='similar'>
                    <h1 className='similar-title'>Similar</h1>
                    <Similar category='tv' id={id} />
                </div>
            </div>
        </div>
    );
}

export default WatchTV;