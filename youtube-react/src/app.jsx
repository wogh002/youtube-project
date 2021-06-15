import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSelect = item => {
    setSelectedVideo(item);
  }
  const onSearch = query =>{
    youtube
    .search(query)
    .then(videos => setVideo(videos))
  }
  useEffect(() => {
    youtube
      .getMostPopular()
      .then(videos => setVideo(videos))
  }, [youtube])


  return (
    <section className={style.container}>
      <Header onSearch={onSearch}/>
      <VideoList videos={video} onSelect={onSelect} />
      {
        selectedVideo && <VideoDetail selectedVideo={selectedVideo} />
      }
    </section>
  );
}

export default App;
