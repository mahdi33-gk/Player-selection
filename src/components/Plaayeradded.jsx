import React from 'react';

const Plaayeradded = ({selectplayer}) => {
    const {name,image} = selectplayer
    return (
        <div className='bg-black'>
            <h1>ok vai lorem3333 {name}</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default Plaayeradded;