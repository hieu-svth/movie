import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, GET_IMG } from '../../components/Api/Api';
import Button, { ButtonExtra } from '../../components/Button/Button.js';
import Cast from '../../components/Cast/Cast';
import Similar from '../../components/Similar/Similar';
import './Detail.css';

function Detail() {
    const params = useParams()
    const [detail, setDetail] = useState([])
    const { seasons } = detail
    let season = seasons && seasons.shift()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    })
    const handleLoad = () => {
        setLoading(false)
    }
    const { category, id } = params
    useEffect(() => {
        fetch(`${BASE_URL}/${category}/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => setDetail(data))
        setLoading(false)
    }, [id])
    return (
        <div>
            {!loading &&
                <div className='detail'>
                    <div className='detail-content'
                        style={{ backgroundImage: `url(${GET_IMG}${detail.backdrop_path})` }}>
                        <div className='detail-container'>
                            <img src={`${GET_IMG}${detail.poster_path}`} className='hide-on-mobile detail-container__img' />
                            <div className='detail-container__wrap'>
                                <h2 className='detail-container__name'>{detail.title || detail.name}</h2>
                                <p className='detail-container__overview'>{detail.overview}</p>
                                <p className='detail-container__release'>Release date: {detail.release_date || detail.last_air_date}</p>
                                {detail.genres && detail.genres.map((item, index) => (
                                    <div key={index} className='detail-container__genres'>
                                        <Button>{item.name}</Button>
                                    </div>
                                ))}
                                <div className='detail-container__watch'>
                                    {
                                        category === 'movie' ?
                                            <Link to={`/watch/${category}/${id}`}>
                                                <ButtonExtra>Watch Now</ButtonExtra>
                                            </Link>
                                            : <Link to={`/watch/${category}/${id}/seasons/${season ? season.season_number - 1 : '1'}/episodes/0`} >
                                                <ButtonExtra>Watch Now</ButtonExtra>
                                            </Link>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='detail-character gird wide'>
                        <Cast category={category} id={id} />
                        <div className='similar'>
                            <h1 className='similar-title'>Similar</h1>
                            <Similar onClick={handleLoad} category={category} id={id} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Detail;