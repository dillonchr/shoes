import React from 'react';
import './home.css';
import ShoeList from '../components/shoes-list';

export default () => (
    <div className="home">
        <h1>Shoes</h1>
        <p>Shoes say a lot about a person. I tried to find credible articles to back up this claim. I can't find anything beyond listicles that are pushing shoes off on personality quiz hungry people. Oh well. I happen to agree with it and give it the proper amount of credence. Little more than finding it funny.</p>
        <ShoeList />
    </div>
);
