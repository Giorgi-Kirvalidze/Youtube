import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from '../components/VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('anime')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;


//video => setSelectedVideo(video 100 % equivvalent to setSelectedVideo when we have video in tu place like that change it
