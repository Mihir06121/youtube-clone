import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'
import './App.css';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        // to have a default search
        this.onTermSubmit('Alan Walker')
    }

    onTermSubmit = async inputSearch => {
        const response = await youtube.get('/search', {
            params: {
                key: 'AIzaSyDMD99D_9ZoLEnGx_4Gsqhk4FcW9XHr1oE',
                part: 'snippet',
                q: inputSearch,
                maxResults: 15,
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[1]
        });
    };

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className="ui container">
                <div className="search-sticky">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                </div>
                <div className="new">
                    <div className="main-div row container-fluid" >
                        <div className="col-xs-12 sticky-div">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="col-xs-12 scrollable-div">
                            <VideoList onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;