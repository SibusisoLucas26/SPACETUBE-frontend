import React from 'react';
import './VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => (
    <div className="video-list">
        {videos.map((video) => (
            <div key={video.id.videoId} className="video-item" onClick={() => onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="video-thumbnail" />
                <div className="video-details">
                    <h4 className="video-title">{video.snippet.title}</h4>
                    <p className="video-channel">{video.snippet.channelTitle}</p>
                </div>
            </div>
        ))}
    </div>
);

export default VideoList;

