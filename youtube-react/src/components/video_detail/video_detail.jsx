import React from 'react';
import style from './video_detail.module.css';
const VideoDetail = ({ video }) => {
    return (
        <section>
            <div className={style.videoContainer}>
                <iframe
                    id="ytplayer"
                    type="text/html"
                    title="youtube video player"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
            </div>
            <h1 className={style.title}>{video.snippet.title}</h1>
            <div className={style.channelInfo}>
                <div className={style.youtuber}>
                    <img src={video.thumbnailURL} className={style.thumbnail} alt="channel thumbnail" />
                    <h2 className={style.channelTitle}>{video.snippet.channelTitle}</h2>
                </div>
                <button type="button" className={style.btn}>구독</button>
            </div>
            <p className={style.description}>{video.snippet.description}</p>
        </section>
    )
}



export default VideoDetail;