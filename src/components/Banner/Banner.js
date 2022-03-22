import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, GET_IMG, IMG_POSTER } from '../Api/Api.js';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button/Button.js';
import './Banner.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

function Banner() {
    SwiperCore.use([Autoplay]);
    const [movies, setMovies] = useState([])
    const trending = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    useEffect(() => {
        fetch(trending)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])
    return (
        <Swiper
            autoplay
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
        >
            {movies.map((item, i) => (
                <SwiperSlide key={i} >
                    <div className='slider'>
                        <div className='slider-item' style={{
                            backgroundImage: `url(${GET_IMG}${item.backdrop_path})`
                        }}>
                            <div className='slider-item__content-wrap grid wide'>
                                <div className='slider-item__content'>
                                    <h1 className='slider-item__content-info'>{item.title}</h1>
                                    <p className='slider-item__content-overview '>{item.overview}</p>
                                    <div className='btns'>
                                        <Link to={`watch/movie/${item.id}`}>
                                            <Button>Watch Now</Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className='slider-item__poster hide-on-mobile'>
                                    <img src={`${IMG_POSTER}${item.poster_path}`} />
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
            }
        </Swiper>
    );
}

const Trailer = ({ item }) => {

}

export default Banner;