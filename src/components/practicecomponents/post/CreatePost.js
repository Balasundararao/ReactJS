import React,{useState} from 'react';
export default function CreatePost({user,posts, setPosts}){
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleBody=(e)=>{
        setBody(e.target.value)
    }
    const handleCreate =()=>{
        const newPost = {title, body, author:user}
        setPosts([newPost, ...posts]);
    }

    return(
        <form onSubmit={e => {e.preventDefault(); handleCreate()}}>
            <div>Author is : {user}</div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" value={title} onChange={handleTitle}/>
                <textarea value={body} onChange={handleBody} />
                <input type="submit" value="Create Post"/>
            </div>
        </form>
    )
}