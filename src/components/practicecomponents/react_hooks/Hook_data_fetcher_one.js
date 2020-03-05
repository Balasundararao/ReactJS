import React, {useState, useEffect} from 'react';
import axios from 'axios';
const DataFetcherOne = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1);
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)
    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/"+idFromBtnClick)
            .then( res => {
                console.log( res );
                setPost(res.data);
            })
            .catch( error => {
                console.log( error );
            })
    }, [idFromBtnClick]);
    const handleClick = () => {
        setIdFromBtnClick(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={ e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            {post.title}
        </div>
    )
}
export default DataFetcherOne; 

