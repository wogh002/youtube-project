import React from 'react';
import style from './video_item.module.css';

const VideoItems = ({ video, video: { snippet }, onSelect }) => {
    return (
        <li className={style.video} onClick={() => { onSelect(video) }}>
            <img src={snippet.thumbnails.medium.url} className={style.thumbnail} alt="thumbnails" />
            <div className={style.infoContanier}>
                <img src={video.thumbnailURL} alt="thumbnail"></img>
                <h1 className={style.title}>{snippet.title}</h1>
                <p className={style.channel}>{snippet.channelTitle}</p>
            </div>
        </li>
    )
}

export default VideoItems;