import React from 'react';
import VideoItem from '../video_item/video_item';
import style from './video_list.module.css';

const VideoList = ({ videos, onSelect, display }) => {
    return (
        <ul className={style.list}>
            {
                videos.map(video =>
                    <VideoItem
                        key={video.id}
                        video={video}
                        onSelect={onSelect}
                        display={display}
                    />)
            }
        </ul>
    )
}

export default VideoList;