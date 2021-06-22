import React from 'react';
import style from './video_item.module.css';
const VideoItems = ({ video, video: { snippet }, onSelect, display }) => {
    const displayType = display === 'list' ? style.list : style.grid;
    return (
        <li className={`${style.video} ${displayType}`} onClick={() => { onSelect(video) }}>
            <img src={snippet.thumbnails.medium.url} className={style.thumbnail} alt="thumbnails" />
            <div className={style.infoContanier}>
                <img src={video.thumbnailURL} className={style.channelThumbnail} alt="thumbnail"></img>
                <div className={style.channelInfo}>
                    <h1 className={style.title}>{snippet.title}</h1>
                    <p className={style.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}

export default VideoItems;