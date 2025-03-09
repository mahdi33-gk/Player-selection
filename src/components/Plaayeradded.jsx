import React from 'react';

const Plaayeradded = ({selectplayer}) => {
    const {name,image} = selectplayer
    return (
        <div className='pb-3'>
            <h1>ok vai lorem3333 {name}</h1>
            <img src={image} alt="" />
            console.log(name)
        </div>
    );
};

export default Plaayeradded;