import React from 'react';
import style from './video_detail.module.css';

const VideoDetail = ({ video, video: { statistics } }) => {
    return (
        <section className={style.video}>
            <iframe
                id="ytplayer"
                type="text/html"
                title="youtube video player"
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <span>조회수 {video.viewCount}</span>
            <span>좋아요 {statistics.likeCount}</span>
            <span>싫어요 {statistics.dislikeCount}</span>
        </section>
    )
}



export default VideoDetail;