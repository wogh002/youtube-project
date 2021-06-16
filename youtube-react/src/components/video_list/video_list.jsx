import React from 'react';
import VideoItem from '../video_item/video_item';
import style from './video_list.module.css';

const VideoList = ({ videos, onSelect }) => {
    return (
        <ul className={style.list}>
            {
                videos.map(video => <VideoItem key={video.id} video={video} onSelect={onSelect}/>)
            }
        </ul>
    )
}

export default VideoList;