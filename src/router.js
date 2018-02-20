import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/home';
import ShoeDetail from './routes/shoe-detail';

export default () => (
    <Router>
        <div className="router">
            <Route exact={true} path="/" component={Home} />
            <Route path="/shoe/:shoeId" component={ShoeDetail} />
        </div>
    </Router>
);
