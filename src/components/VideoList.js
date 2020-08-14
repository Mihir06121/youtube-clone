import React from 'react';
import VideoItem from './VideoItem';

const ListofVideo = ({ videos, onSelectVideo }) => {
    const List = videos.map((video) => {
        return <VideoItem key={video.id.videoId}
            video={video}
            onSelectVideo={onSelectVideo} />
    });
    return <div className="ui relaxed divided list">{List}</div>
}

export default ListofVideo;
