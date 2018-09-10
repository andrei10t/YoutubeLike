import React, { Component } from 'react'
import RD from 'react-dom'
import SB from './components/search'
import YSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBDsZfgy1AZEpowvZLfkgMgo-7KaX-OD1M'

// create component that produces html
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    YSearch({ key: API_KEY, term: 'the evil that men do' }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
      // this.setState({videos : videos })
    })
  }
  render () {
    return (
      <div>
        <SB />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}
// take this component's generated html and put in
// on the page(DOM)
RD.render(<App />, document.querySelector('.container'))
