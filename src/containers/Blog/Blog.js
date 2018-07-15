import React, { Component } from 'react';
import Oux from '../../hoc/Oux'; 
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({posts: response.data});
            // handle success
            //console.log(response);
        });
    }

    render () {
        const posts = this.state.posts.map(post=>{ 
            return <Post key={post.id} title={post.title} />
        });

        return (
            <Oux>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </Oux>
        );
    }
}

export default Blog;