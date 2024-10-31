import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ video }) => {
    if (!video) return <div>Loading...</div>;

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

    const handleDownload = () => {
        window.open(`http://localhost:4000/download?url=${videoUrl}`, '_blank');
    };

    return (
        <div className="video-player-container">
            <div className="video-frame">
                <iframe
                    title="Video Player"
                    src={videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="video-details">
                <h2 className="video-title">{video.snippet.title}</h2>
                <p className="video-channel">{video.snippet.channelTitle}</p>
                <p className="video-description">{video.snippet.description}</p>
                <button className="download-button" onClick={handleDownload}>Download</button>
            </div>
        </div>
    );
};

export default VideoPlayer;

