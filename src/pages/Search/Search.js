import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../../components/Api/Api';
import { ButtonExtra } from '../../components/Button/Button';
import Grid from '../../components/Gird/Grid';
import MovieCard from '../../components/Movie-Card/movieCard';
import NotFound from '../NotFound/NotFound';

function Search() {
    const params = useParams()
    const { searchTerm } = params
    const [search, setSearch] = useState([])
    useEffect(() => {
        searchRef.current = searchTerm
    }, [searchTerm])
    const searchRef = useRef()
    console.log(searchTerm, searchRef.current)
    searchRef.current = searchTerm
    const [pages, setPages] = useState(1)
    const handleLoadMore = () => {
        setPages(pages + 1)
    }
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/detail/movie/${id}`)
    }
    useEffect(() => {
        fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${pages}`)
            .then(respon => respon.json())
            .then(data => {
                if (searchTerm == searchRef.current) {
                    setSearch([...search, ...data.results])
                } else {
                    setSearch(data.results)
                }
            })
    }, [pages, searchTerm])
    return (
        <div>
            {search.length != 0 ? <div><Grid>
                {search.length !== 0 && search.map((item, index) => {
                    return (
                        <MovieCard onClick={() => handleNavigate(item.id)} item={item} key={index} />)
                })}
            </Grid>
                <div style={{ margin: '0 auto', display: 'flex' }}>
                    <ButtonExtra onClick={handleLoadMore}>Load More</ButtonExtra>
                </div></div>
                : <NotFound />}

        </div>
    );
}

export default Search;