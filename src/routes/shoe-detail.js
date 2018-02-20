import React from 'react';
import {connect} from 'react-redux';
import './shoe-detail.css';

const ShoeDetail = ({shoe}) => {
    if (shoe) {
        return (
            <div className="shoe-details">
                <div className="shoe-details__photo">
                    <img src={`/images/${shoe.image}`} alt={shoe.name}/>
                </div>
                <div className="shoe-details__metadata">
                    <div className="shoe-details__stars">
                        <div className="shoe-details__stars-fill" style={{width: `${shoe.rating / 10 * 100}%`}}/>
                        <img className="shoe-details__stars-overlay" src="/images/stars.png" alt="stars"/>
                    </div>
                    <h2>{shoe.name}</h2>
                    <p className="shoe-details__brand">{shoe.brand}</p>
                    <p className="shoe-details__story">{shoe.story}</p>
                </div>
            </div>
        );
    }
    return <p/>;
};

export default connect((s, p) => ({shoe: s.shoes[p.match.params.shoeId]}))(ShoeDetail);