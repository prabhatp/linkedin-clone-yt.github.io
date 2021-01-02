import React, { useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create'; 
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import FlipMove from 'react-flip-move';
function Feed() {
    var [posts, setPosts] = useState([
        { 
            name: 'Ankit Kumar',
            description : "Auditor", 
            message: "Hey How are you doing guys!!!"
        },
        { 
            name: 'Chetan Singhal',
            description : "LiveLab Team", 
            message: "Good Morning everyone!!!"
        },
        { 
            name: 'Ankit Mishra',
            description : "Apps Developer", 
            message: "Hey How are you doing guys!!!"
        },
        { 
            name: 'Rachit Gupta',
            description : "UI Developer", 
            message: "Hey Bro. What's up!!!"
        }
    ]) 
    const sendPost = (e) => {
        const send_post_input = document.getElementById('post_input');
        const message = send_post_input.value;
        setPosts([
            ...posts,
            {
                name : "Prabhat Kumar" , 
                description : "Software developer", 
                message: message
            }
        ]);
        send_post_input.value = '';
        e.preventDefault();
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" id="post_input" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            {/* Post */}
            <FlipMove>
                {posts.map((post) => (
                    <Post name={post.name} description={post.description} message={post.message} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
