import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './shoes-list.css';

const Shoe = ({thumbUrl, name, id}) => (
    <div className="shoes-list__tile">
        <Link to={`/shoe/${id}`}>
            <img src={thumbUrl} alt={name}/>
        </Link>
        <p className="shoes-list__label">
            <Link to={`/shoe/${id}`}>{name}</Link>
        </p>
    </div>
);

const ShoesList = ({shoes}) => {
    return (
        <div className="shoes-list">
            {shoes.map((s, i) => {
                return <Shoe key={s.name} name={s.name} id={i} thumbUrl={`images/thumbs/${s.image}`}/>;
            })}
        </div>
    );
};

export default connect(s => ({shoes: s.shoes}))(ShoesList);
