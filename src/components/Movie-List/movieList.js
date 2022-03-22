import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react'
import { API_KEY, BASE_URL } from '../Api/Api';
import MovieCard from '../Movie-Card/movieCard';
import { Link } from 'react-router-dom';

function MovieList({ category, navigate }) {
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        const getMovieList = async () => {
            const data = await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}`)
            const response = await data.json()
            setMovieList(response.results)
        }
        getMovieList()
    }, [])
    return (
        <>
            <Swiper
                navigation
                slidesPerView={'auto'}
                grabCursor={true}
                spaceBetween={10}
            >
                {movieList.map((item, index) =>
                    <SwiperSlide key={index}>
                        <Link to={`/detail${navigate}/${item.id}`}>
                            <MovieCard item={item} />
                        </Link>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}

export default MovieList; 