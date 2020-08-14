import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import ListofVideo from './VideoList'
import VideoDetails from './VideoDetails'
import './App.css';


class App extends React.Component {
    state = {
        videos: [],
        videoSelect: null
    }

    componentDidMount() {
        // to have a default search
        this.onSubmit('Alan Walker')
    }

    onSubmit = async userInput => {
        const response = await youtube.get('/search', {
            params: {
                key: 'AIzaSyDMD99D_9ZoLEnGx_4Gsqhk4FcW9XHr1oE',
                part: 'snippet',
                q: userInput,
                maxResults: 15,
            }
        });

        this.setState({
            videos: response.data.items,
            videoSelect: response.data.items[1]
        });
    };

    onSelectVideo = video => {
        this.setState({
            videoSelect: video
        })
    }

    render() {
        return (
            <div className="ui container">
                <div className="search-sticky">
                    <SearchBar onFormSubmit={this.onSubmit} />
                </div>
                <div className="new">
                    <div className="main-div row container-fluid" >
                        <div className="col-xs-12 sticky-div">
                            <VideoDetails video={this.state.videoSelect} />
                        </div>
                        <div className="col-xs-12 scrollable-div">
                            <ListofVideo onSelectVideo={this.onSelectVideo}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;