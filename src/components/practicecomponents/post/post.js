import React from 'react';
export default function Post({title, body, author}) {
    return(
        <div>
            <h3>{title}</h3>
            <div>{body}</div>
            <br/>
            <i>Writtern by {author}</i>
        </div>
    )
}

