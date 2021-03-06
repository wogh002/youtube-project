import React, { useCallback, useEffect, useState } from 'react';
import style from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
function App({ youtube }) {
  const LIST = 'list';
  const GRID = 'grid';
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSelect = useCallback(item => {
    setSelectedVideo(item);
  }, []);
  const onSearch = useCallback(query => {
    youtube
      .search(query)
      .then(videos => {
        youtube.getChannelInfo(videos)
          .then(newVideos => {
            setSelectedVideo(null);
            setVideo(newVideos);
          });
      });
  }, [youtube]);
  useEffect(() => {
    youtube
      .getMostPopular()
      .then(videos => {
        youtube.getChannelInfo(videos)
          .then(newVideos => {
            setVideo(newVideos)
          });
      })
  }, [youtube]);
  return (
    <section className={style.container}>
      <Header onSearch={onSearch} />
      <section className={style.videoContainer}>
        {
          selectedVideo && (
            <div className={style.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )
        }
        <div className={style.list}>
          <VideoList videos={video} onSelect={onSelect} display={selectedVideo ? LIST : GRID} />
        </div>
      </section>
    </section>
  );
}
export default App;
