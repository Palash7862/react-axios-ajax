import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Oux from '../../hoc/Oux';
import Posts from './Posts/Posts';
import NewPosts from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends Component {

    state = {
        posts: [], 
        postSelectedId: null,
        error: false
    }  

    render () { 

        return (
            <Oux>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                search: '?search=title',
                                hash: '#submit'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header> 
                <Switch> 
                    <Route path='/' exact component={Posts} />  
                    <Route path='/new-post'  component={NewPosts} /> 
                    <Route path='/:postId' exact  component={FullPost} />  
                </Switch>
            </Oux>
        );
    }
}

export default Blog;