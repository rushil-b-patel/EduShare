import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const [input, setInput] = useState('');
    const[posts, setposts] = useState([]);
    
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
        setposts(
            snapshot.docs.map((doc) => ({
            id : doc.id,
            data: doc.data(),
            }))
        )
        );
    }, []);

    const sendpost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name:'Rushil Patel',
            description: 'this is a test',
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };

  return ( 
        <div className='feed'>
        <div className='feed_inputcontainer'>
            <div className='feed_input'>
            <CreateIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Post here' />
                <button onClick={sendpost}type='submit'>Send</button>
            </form>
            </div>
            <div className='feed_inputoptions'>
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOption Icon={VideoLibraryIcon} title='Video' color='#E7A33E' />
                <InputOption Icon={EventIcon} title='Events' color='#B4CDED' />
                <InputOption Icon={ArticleIcon} title='Article' color='#F9E0D9' />
            </div>
        </div>

        {/* Posts */}
        {posts.map(({id, data:{name,description,message,photoUrl}}) => (
            <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
             />
        ))}

    </div>
  )
}

export default Feed