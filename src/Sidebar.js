import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) =>(
        <div className='sidebar_recentitem'>
            <span className='sidebar_hash'>#</span>
            <p> {topic} </p>
        </div>
    );


    return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src='./images/thor.jpg' alt='backcover'/>
            <Avatar className='sidebar_avatar' />
            <h2>Rushil Patel</h2>
            <h4>Computer Science & Engineering</h4> 
        </div>

        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>ratings</p>
                <p className='sidebar_statnum'>200</p>
            </div>
            <div className='sidebar_stat'>
                <p> Views on post</p>
                <p className='sidebar_statnum'>250</p>
            </div>
        </div>
        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem('C++')}
            {recentItem('C')}
            {recentItem('Java')}
            {recentItem('HTML')}
            {recentItem('Maths')}
        </div>
    </div>
  )
}

export default Sidebar