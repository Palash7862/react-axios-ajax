import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const post = (props) => {
    //console.log(props);
    return( 
        <article className="Post" onClick={props.clicked}>
        {// <Link to={'/'+props.id} >
        }
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        {// </Link>
        }
        </article> 
    );
};

export default post;