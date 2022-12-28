import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/Rambling.css';

import CreateIcon from '@mui/icons-material/CreateOutlined';

const port = 3400;

function Rambling () {

    const [feed, setFeed] = useState({posts: []});
    
    //console.log(feed.postToView);

    useEffect(() => {

        async function refreshFeed() {
            try{
                const posts = await axios.get(`http://localhost:${port}/blog`);
                const result = posts.data.post_list;
                var tempFeed = [];
                for (var i=0; i<result.length; i++){
                    tempFeed.push(
                        <div className='blog-container' key={result[i].title}>
                            <h1>{result[i].title}</h1>
                            <p>{result[i].descr}</p>
                            <p>{result[i].date}</p>
                            <Link to={'/rambling/' + result[i]._id}>
                                <button 
                                    className="post-button">
                                        Read Here
                                </button>
                            </Link>
                        </div>
                    )
                }
                return tempFeed;
            }
            catch(er){
                console.log(er); 
            }
        }

        refreshFeed()
        .then(data =>
            setFeed({posts: data})
        );
      }, [feed])

    return(
        <div className='content-container'>
            <div className="rambling-header">
                <h1 className="rambling-h1">Rambling</h1>
                {(window.sessionStorage.getItem("id") !== "null") &&
                <button className="page-button">
                    <CreateIcon className="icon-shift"/>
                    <span className="icon-shift">&nbsp;Create Blog Post</span>
                </button>}
            </div>
            {feed.posts}
        </div>
    );
    
}

export default Rambling;