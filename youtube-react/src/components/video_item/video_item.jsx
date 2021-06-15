import React from 'react';
import style from './video_item.module.css';

const VideoItems = ({ video ,video: { snippet }, onSelect }) => {
    return (
        <li className={style.video} onClick={() => { onSelect(video) }}>
            <img src={snippet.thumbnails.medium.url} className={style.thumbnail} alt="video" />
            <div className={style.infoContanier}>
                <span>채널썸네일</span>
                <h1 className={style.title}>{snippet.title}</h1>
                <p className={style.channel}>{snippet.channelTitle}</p>
            </div>
        </li>
    )
}

export default VideoItems;