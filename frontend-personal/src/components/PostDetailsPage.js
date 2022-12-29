import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../css/Rambling.css';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import {useParams} from 'react-router-dom';

const port = 3400;

function PostDetails (){

    const [post, setPost] = useState({});

    const {id} = useParams();

    useEffect(() => {
        async function findPost (){
            const result = await axios.get(`http://localhost:${port}/blog/` + id);
            return result.data.post;
        }

        findPost()
        .then(data =>
            setPost(data)
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return(
        <div className='content-container'>
            <div className="rambling-header">
                <h1 className="rambling-h1">{post.title}</h1>
                {(window.sessionStorage.getItem("id") !== "null") &&
                <button className="page-button">
                    <CreateIcon className="icon-shift"/>
                    <span className="icon-shift">&nbsp;Edit Post</span>
                </button>}
            </div>
            <p>{post.date}</p>
            <p>{post.descr}</p>
            <p>{post.body}</p>
        </div>
    );
}

export default PostDetails;
