import React, {useState} from 'react';
import axios from 'axios';
import '../css/Rambling.css';

const port = 3400;

function Rambling () {

    const [feed, setFeed] = useState({posts: [], clickPost: 0, postToView: []});

    window.addEventListener('load', async () => {
        await makeFeed();
        console.log(window.sessionStorage.getItem("id"));
    });

    async function makeFeed() {
        try{
            const posts = await axios.get(`http://localhost:${port}/blog`);
            const result = posts.data.post_list;
            var tempFeed = [];
            for (var i=0; i<result.length; i++){
                tempFeed.push(
                    <div className='blog-container' key={result[i].title}>
                        <h1 name="post-heading" >{result[i].title}</h1>
                        <p>{result[i].descr}</p>
                        <p>{result[i].date}</p>
                        <button>Read Here</button>
                    </div>
                )
            }
            await setFeed({posts: tempFeed, clickPost: feed['clickPost'], postToView: feed['postToView']});
        }
        catch(er){
            console.log(er); 
        }
    }

    return (
        <div className='content-container'>
            <h1>Rambling</h1>
            {(window.sessionStorage.getItem("id") !== null) &&
            <button>Create Blog Post</button>}
            {feed.posts}
        </div>
    );
}

export default Rambling;