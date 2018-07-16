import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
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
            console.log(updatedPost);
        })
        .catch(error=> {
            // handle error
             console.log(error);
            this.setState({error: true});
        });
    }

    postSelectedHandaler = (id) =>{
        this.setState({postSelectedId: id});
    }

    render(){
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
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;