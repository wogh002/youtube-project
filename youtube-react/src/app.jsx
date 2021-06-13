import React, { useState } from 'react';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

function App() {
 
  return (
    <section>
      <Header />
      <VideoList/>
    </section>
  );
}

export default App;
