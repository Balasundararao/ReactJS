import React, {Component, useState} from 'react';


// From NPMS examples....
import BDatePicker from './from_npms/date_picker'
import BFDatePicker from './from_npms/date_picker_formik'
import Basic from './from_npms/basic_formik'
import DateAndTimePickers from './from_npms/date_picker_material'
import InsertStockComponent from './from_npms/InsertStockComponent'

//React Regular ....
import ClassCounter from './react_regular/ClasCounter';

//React Straps
import { Button } from 'reactstrap';


//user.....
import UserBar from './user/userbar';

//POSTS....
import PostList from './post/postlist'
import CreatePost from './post/CreatePost'


const defaultPosts = [
    { title: 'React Hooks', body: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', body: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

const PracticeLanding = () => {
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState(defaultPosts);

    return (
        <div>
            <h1> Practice Landing Component.....</h1>
            
            {/* // from NPMS */}
            <div>
                <div>1.Simple Date picker using react-datepicker:: <BDatePicker/></div><br/><br/><br/>
                <div>2.Formik + Date picker using react-datepicker  and  FORMIK:: <BFDatePicker/></div> 
                <div>3.Material Date picker :: <DateAndTimePickers/></div> 
                <div>4.DatePicker formik... :: <InsertStockComponent/></div> 
                 {/* <Basic/>  */}
            </div>
            {/* // React Regular  */}
            <div>
                <div><ClassCounter/></div>
            </div>

            { /* React Strap...*/  }
            <Button color="danger">Danger!</Button>

          

            {/* User Components */}
            <UserBar user={user} setUser={setUser}/>
            
            {/** POST LIST COMPONENT  */}
            {user && <CreatePost user={user} posts={posts} setPosts={setPosts}/> }
            <PostList posts = {posts}/>
        </div>
    )
}
export default PracticeLanding;
