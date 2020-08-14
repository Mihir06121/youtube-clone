import React from 'react';

const VideoDetails = ({ video }) => {
    if (!video) return <div>Loading....! </div>;

    const videoEmbedURL = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed" style={{height:"80%"}}>
                <iframe src={videoEmbedURL} title="Video Player"></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {video.snippet.title} </h4>
                <p> {video.snippet.description} </p>
            </div>
        </div>
    );
}

export default VideoDetails;
