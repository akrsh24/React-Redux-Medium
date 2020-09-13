import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(posts => this.setState({
                posts
            }));
    }

    renderEachPosts = () => {
        const { posts } = this.state;
        if (posts.length > 0) {
            return posts.map(post => {
                return (
                    <div className="post-div">
                        <ul>
                            <li>ID: {post.id}</li>
                            <li>Title: {post.title}</li>
                            <li>Body: {post.body}</li>
                        </ul>
                    </div>
                )
            })
        }
        else {
            return <p>No data to display </p>
        }

    }

    render() {
        console.log(this.state);
        return (
            <div className="post-container">
                <div>
                    <header>
                        <h1>All Posts</h1>
                    </header>
                    <main>
                        <div className="posts-section">
                            {this.renderEachPosts()}
\                        </div>
                    </main>
                    <footer>
                        <button type="button" >Get all Posts</button>
                    </footer>
                </div>

            </div>
        );
    }
}

export default Posts;