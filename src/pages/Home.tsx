import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
    <div>
        <h1>Home Page</h1>
        <div>{process.env.REACT_APP_API_BASE_URL}</div>
        <Link to="/welcome">Go to User 42 Page</Link>
    </div>
);

export default HomePage;