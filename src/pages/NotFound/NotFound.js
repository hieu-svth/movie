import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './NotFound.css'

function NotFound() {
    return (
        <div className='error'>
            <h1 className='error-title'>404 NOT FOUND!</h1>
            <p className='error-des'>The page you are looking for does not exist. You may have used an outdated link or may have typed the URL incorrectly.</p>
            <Link to='/'><button className='error-btn'>Back to home</button></Link>
        </div>
    );
}

export default NotFound;