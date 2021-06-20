import React from 'react';
import style from './video_item.module.css';

const VideoItems = ({ video, video: { snippet }, onSelect, display }) => {
    //display === list 라면 셀렉티드 된 비디오가 있다는 것.
    const displayType = display === 'list' ? style.list : style.grid;
    return (
        <li className={`${style.video} ${displayType}`} onClick={() => { onSelect(video) }}>
            <img src={snippet.thumbnails.medium.url} className={style.thumbnail} alt="thumbnails" />
            <div className={style.infoContanier}>
                <img src={video.thumbnailURL} className={style.channelThumbnail} alt="thumbnail"></img>
                <div className={style.channelInfo}>
                    <h1 className={style.title}>{snippet.title}</h1>
                    <p className={style.channel}>{snippet.channelTitle}</p>
                    {/* <span className={style.viewCount}>조회수 {video.statistics.viewCount}</span> */}
                </div>
            </div>
        </li>
    )
}

export default VideoItems;