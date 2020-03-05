import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'reactstrap'

const DataFetcher = () => {
    const [posts,setPosts] = useState([])
    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then( res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch( err => {
                console.log( err )
            })
    }, [])
    return(
        <Table bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                </tr>
                
                {
            posts.map( post => <tr><td>{post.id}</td><td>{post.title}</td></tr>)
                }
               
            </thead>
        </Table>
        // <div>
        //     <ul>
        //     {
        //         posts.map( post => <li key={post.id}>{post.title}</li>)
        //     }
        //     </ul>
        // </div>

    )
}
export default DataFetcher;