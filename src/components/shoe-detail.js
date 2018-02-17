import React from 'react';
import './shoe-detail.css';

export default ({shoe, onExit}) => (
    <div className="shoe-details">
        <button className="shoe-details__exit" onClick={onExit} />
        <div className="shoe-details__photo">
            <img src={`images/${shoe.image}`} alt={shoe.name}/>
        </div>
        <div className="shoe-details__metadata">
            <div className="shoe-details__stars">
                <div className="shoe-details__stars-fill" style={{width: `${shoe.rating/10*100}%`}} />
                <img className="shoe-details__stars-overlay" src="images/stars.png" alt="stars" />
            </div>
            <h2>{shoe.name}</h2>
            <p className="shoe-details__brand">{shoe.brand}</p>
            <p className="shoe-details__story">{shoe.story}</p>
        </div>
    </div>
);