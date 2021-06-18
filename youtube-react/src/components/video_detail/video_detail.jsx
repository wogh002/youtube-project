import React from 'react';
import style from './video_detail.module.css';

const VideoDetail = ({ video }) => {
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
        </section>
    )
}



export default VideoDetail;