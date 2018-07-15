import React, { Component } from 'react';
import Oux from '../../hoc/Oux'; 
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [], 
        postSelectedId: null,
        error: false
    }

    componentDidMount(){
        // Make a request for a user with a given ID
        axios.get('/posts')
        .then(response=>{
            const posts = response.data.slice(0, 4);
            const updatedPost = posts.map(post=>{
                return {...post, author: 'Max'}
            });
            this.setState({posts: updatedPost});
            // handle success
            //console.log(updatedPost);
        })
        .catch(error=> {
            // handle error
            // console.log(error);
            this.setState({error: true});
        });
    }

    postSelectedHandaler = (id) =>{
        this.setState({postSelectedId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Somthing was wrong!</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post=>{ 
                return <Post key={post.id} 
                            title={post.title} 
                            author={[post.author]} 
                            clicked={()=>this.postSelectedHandaler(post.id)}/>
            });
        }

        return (
            <Oux>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost postId={this.state.postSelectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </Oux>
        );
    }
}

export default Blog;