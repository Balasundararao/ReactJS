import React from 'react';
import Post from './post';
export default function PostList({posts = []}) {
    return(
        <div>
           { posts.map( (p,i) =>  <Post {...p} key={'post-' + i} />)}
        </div>
    )
}