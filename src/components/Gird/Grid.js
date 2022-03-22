import React from 'react';
import './Grid.css'

function Grid(props) {
    return (
        <div className='layout'>
            {props.children}
        </div>
    );
}

export default Grid;