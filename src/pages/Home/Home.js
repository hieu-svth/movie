import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/Banner/Banner.js'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button.js';
import './Home.css'
import MovieList from '../../components/Movie-List/movieList.js';
import Footer from '../../components/Footer/Footer.js';


function Home() {
    let navigate = useNavigate()
    const handleClick = (path) => {
        navigate(path)
    }
    return (
        <div>
            <Banner />
            <div className='container grid wide'>
                <div className='section'>
                    <div className='section__header'>
                        <h2 className='section__header-title'>Movies Top_Rated</h2>
                        <Button onClick={() => handleClick('/movie/top_rated')}>View More</Button>
                    </div>
                    <div className='section__body'>
                        <MovieList category='movie/top_rated' navigate='/movie' />
                    </div>
                </div>
                <div className='section'>
                    <div className='section__header'>
                        <h2 className='section__header-title'>Movies Popular</h2>
                        <Button onClick={() => handleClick('/movie/popular')}>View More</Button>
                    </div>
                    <div className='section__body'>
                        <MovieList category='movie/popular' navigate='/movie' />
                    </div>
                </div>
                <div className='section'>
                    <div className='section__header'>
                        <h2 className='section__header-title'>TV Popular</h2>
                        <Button onClick={() => handleClick('/tv/popular')}>View More</Button>
                    </div>
                    <div className='section__body'>
                        <MovieList category='tv/popular' navigate='/tv' />
                    </div>
                </div>
                <div className='section'>
                    <div className='section__header'>
                        <h2 className='section__header-title'>TV Top_Rated</h2>
                        <Button onClick={() => handleClick('/tv/top_rated')}>View More</Button>
                    </div>
                    <div className='section__body'>
                        <MovieList category='tv/top_rated' navigate='/tv' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;