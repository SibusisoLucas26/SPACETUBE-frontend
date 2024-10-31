import React, { useState } from 'react';
import { searchVideos } from './API';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

import Dashboard from './components/Dashboard';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = async (newQuery) => {
    setQuery(newQuery); // Store the query for further paging
    const results = await searchVideos(newQuery);
    setVideos(results.videos);
    setSelectedVideo(results.videos[0]);
    setNextPageToken(results.nextPageToken || '');
    setPrevPageToken(results.prevPageToken || '');
  };

    const handleCategorySearch = (category) => {
        handleSearch(category);
    };

  const handleNextPage = async () => {
    const results = await searchVideos(query, nextPageToken);
    setVideos(results.videos);
    setSelectedVideo(results.videos[0]);
    setNextPageToken(results.nextPageToken || '');
    setPrevPageToken(results.prevPageToken || '');
  };

  const handlePrevPage = async () => {
    const results = await searchVideos(query, prevPageToken);
    setVideos(results.videos);
    setSelectedVideo(results.videos[0]);
    setNextPageToken(results.nextPageToken || '');
    setPrevPageToken(results.prevPageToken || '');
  };

  return (
    <> 
    
    <div>
      <SearchBar onSearch={handleSearch} />
      <Dashboard onCategorySearch={handleCategorySearch} />
      <div className="main-content">
        <VideoPlayer video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        <div className="pagination">
          {prevPageToken && <button onClick={handlePrevPage}>Previous</button>}
          {nextPageToken && <button onClick={handleNextPage}>Next</button>}
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
