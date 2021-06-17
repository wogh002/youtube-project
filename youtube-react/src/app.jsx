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
  const getNewVideos = (thumbnailURL, videos) => {
    console.log(thumbnailURL);
    const newVideos = videos.map(item => {
      item.thumbnailURL = thumbnailURL.shift();
      return item;
    })
    console.log(newVideos);
    setVideo(newVideos);
  }
  const onSearch = query => {
    youtube
      .search(query)
      .then(videos => {
        const channelId = videos.map(item => item.snippet.channelId);
        youtube.getChannelInfo(channelId)
          .then(thumbnails => getNewVideos(thumbnails, videos));
      });
  }
  useEffect(() => {
    youtube
      .getMostPopular()
      .then(videos => {
        youtube.getChannelInfo(videos).then(array => console.log(array))
      })
  }, [])

  return (
    <section className={style.container}>
      <Header onSearch={onSearch} />
      <VideoList videos={video} onSelect={onSelect} />
      {
        selectedVideo && <VideoDetail selectedVideo={selectedVideo} />
      }
    </section>
  );
}

export default App;
