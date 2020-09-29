import React from 'react';
import PostSummary from '../posts/PostSummary';

export default function Notifications({posts}) {
    return (
        <div className="center notifications">
            <p className="title">Najnovije</p>
            {posts && posts.map(post =>{
                return (
                    <PostSummary post={post} key={post.id}/>
                )
            })}
        </div>
    )
}
