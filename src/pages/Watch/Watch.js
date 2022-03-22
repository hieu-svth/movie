import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../../components/Api/Api';
import SeeMore from '../../components/SeeMore/SeeMore';
import './Watch.css'


function Watch() {
    const params = useParams()
    const { id } = params
    const [watchMovie, setWatchMovie] = useState({})
    const { homepage, original_title, overview, vote_average, release_date } = watchMovie
    useEffect(() => {
        fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setWatchMovie(data))
    }, [])
    return (
        <div className='watch gird wide' style={{ backgroundColor: '#333' }}>
            <div className='watch__wrap'>
                <div className='watch__movie'>
                    <iframe
                        src={` https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
                        className='watch__movie-film'
                        title='Play Movie'
                    />
                    <div className='watch__content'>
                        <h1 className='watch__title'>{original_title}</h1>
                        <p className='watch__overview'>{overview}</p>
                        <p className='watch__release'>Release date: {release_date}</p>
                        {homepage && <p>Homepage:   <a href={homepage} className='watch__homepage'>{homepage}</a></p>}
                    </div>
                </div>
                <div className='watch__seemore'>
                    <SeeMore id={id} />

                </div>
            </div>
        </div>
    );
}

export default Watch;