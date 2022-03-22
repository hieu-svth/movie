import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../../components/Api/Api';
import { ButtonExtra } from '../../components/Button/Button';
import Grid from '../../components/Gird/Grid';
import MovieCard from '../../components/Movie-Card/movieCard';

function TvPopular() {

    const [tvPopular, setTvPopular] = useState([])
    const [pages, setPages] = useState(1)
    const handleLoadMore = () => {
        setPages(pages + 1)
    }
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/detail/tv/${id}`)
    }
    useEffect(() => {
        fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${pages}`)
            .then(respon => respon.json())
            .then(data => setTvPopular([...tvPopular, ...data.results]))
    }, [pages])
    return (
        <div>
            <Grid>
                {tvPopular.length !== 0 && tvPopular.map((item, index) => {
                    return (
                        <MovieCard onClick={() => handleNavigate(item.id)} item={item} key={index} />)
                })}
            </Grid>
            <div style={{ margin: '0 auto', display: 'flex' }}>
                <ButtonExtra onClick={handleLoadMore}>Load More</ButtonExtra>
            </div>
        </div>
    );
}

export default TvPopular;