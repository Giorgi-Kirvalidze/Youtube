import React from 'react'

const VideoDetails = ({ video }) => {
    if (!video) {
        return <div>Loading ...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video player"></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">  {video.snippet.title}</h4>
            </div>
            <p>{video.snippet.description}</p>
        </div>
    )

}

export default VideoDetails