import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../tmovie.png';
import './Header.css'
const Header = () => {
    const headerNav = [
        {
            display: 'Home',
            path: '/'
        },
        {
            display: 'Movies',
            path: '/movie'
        },
        {
            display: 'TV Series',
            path: '/tv'
        }
    ];
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const headerList = useRef()
    const headerLogo = useRef()
    const deleteRef = useRef()
    const [color, setColor] = useState('transparent')
    const [search, setSearch] = useState('')
    const active = headerNav.findIndex(e => e.path === pathname)

    const showMenu = () => {
        headerList.current.style.right = '0%'
        headerList.current.style.animation = 'fadeIn ease-in-out 0.4s';
        headerLogo.current.style.display = 'none'
        deleteRef.current.classList.add('active')
    }
    const hideMenu = () => {
        deleteRef.current.classList.remove('active')
        headerLogo.current.style.display = 'flex'
        headerList.current.style.right = '100%'
        headerList.current.style.animation = 'hideMenu ease-in-out 0.4s';
    }

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY >= 100) {
                setColor('#636e72')
            } else {
                setColor('transparent')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleChangeInput = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${search}`)
        setSearch('')
    }

    return (

        <div style={{ backgroundColor: color }} className='header'>
            <div className='header-wrap'>
                <div ref={headerLogo} className='header-wrap__logo'>
                    <img src={logo} alt='' />
                    <Link to='/'>tMovies</Link>
                </div>
                <div className='header-wrap__icon'>
                    <div ref={deleteRef} onClick={hideMenu} className='header-wrap__icon-item'>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div onClick={showMenu} className='header-wrap__icon-item active'>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <ul ref={headerList} className='header-wrap__content'>
                    {headerNav.map((item, i) => (
                        <li onClick={hideMenu} key={i} className={`header-wrap__content-item ${i === active ? 'active' : ''}`}>
                            <Link to={item.path}>{item.display}</Link>
                        </li>
                    ))}
                    <div className='header-wrap__search'>
                        <form className='header-wrap__form' onSubmit={handleSubmit}>
                            <input
                                value={search}
                                onChange={handleChangeInput}
                                placeholder='Search...'
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                        </form>
                    </div>
                </ul>

            </div>
        </div >
    );
};

export default Header;
