import React from 'react';
import Header from '../Shared/Header/Header';
import '../Blog/Blog.css'

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className="container my-blog">
                <div>
                    <h2>Difference between Authorization and Authentication</h2>
                    <p>Authentication and Authorization are the first line of defense to prevent confidential data from falling into the wrong hands.</p>
                </div>
                <div>
                    <h2>Why Should use firebase? what is alternative of firebase</h2>
                    <p></p>
                </div>
                <div>
                    <h2>What can we do without authentication in firebase</h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;