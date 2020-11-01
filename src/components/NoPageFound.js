import React from 'react';
import { Link } from 'react-router-dom';

const NoPageFound = () => {
    return (
        <div>
            No Such Page Exists
            <br/>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NoPageFound;