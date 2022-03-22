import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL, GET_IMG } from '../Api/Api';
import Grid from '../Gird/Grid.js'
import './Cast.css'

function Cast({ category, id }) {
    const [character, setCharacter] = useState([])
    console.log(character)
    useEffect(() => {
        fetch(`${BASE_URL}/${category}/${id}?api_key=${API_KEY}&append_to_response=credits`)
            .then(response => response.json())
            .then(data => setCharacter(data.credits.cast.slice(0, 10)))
    }, [id])
    return (
        <div>

            <Grid>
                {character.map((item, index) => {
                    return (
                        <>
                            {item.profile_path !== null &&
                                <div key={index} style={{ cursor: 'pointer' }}>
                                    <img src={`${GET_IMG}${item.profile_path}`} className='img__character' />
                                    <p style={{ color: '#d6d62c', margin: 0 }}>{item.character}</p>
                                </div>
                            }
                        </>
                    )

                })}
            </Grid>
        </div>
    );
}

export default Cast;