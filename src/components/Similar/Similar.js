import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import MovieCard from '../Movie-Card/movieCard';
import './Similar.css';
function Similar({ category, id, onClick }) {
    const [similar, setSimilar] = useState([])
    SwiperCore.use([Navigation]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${category}/${id}/similar?api_key=7bbc01614f11ab5d4c942ff2b088394b&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setSimilar(data.results))
    }, [id])
    return (
        <>
            <Swiper
                navigation
                slidesPerView={'auto'}
                grabCursor={true}
                modules={[Navigation]}
                spaceBetween={10}
            >
                {similar.map((item, index) =>
                    <SwiperSlide key={index}>
                        <Link to={`/detail/${category}/${item.id}`}>
                            <MovieCard onClick={onClick} item={item} />
                        </Link>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}

export default Similar;