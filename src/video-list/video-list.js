import React, {Component} from 'react';
import './video-list.css';

import VideoCard from '../video-card/video-card';

class VideoList extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {vidList:[
			{
				shotviews:15080,
				likes:12000,
				comments:5100,
				imgUrl:"http://www.colorhexa.com/0099ff.png",
				_id:"sdlfkj2k3"
			},
			{
				shotviews:15080,
				likes:12000,
				comments:5100,
				imgUrl:"http://www.colorhexa.com/cc66cc.png",
				_id:"sdlAAj2k3"
			}
		]}
		//Bind functions
		this.createVideoList = this.createVideoList.bind(this);
	}
	
	createVideoList = () => {
		const list = this.state.vidList.map((video) =>
			<VideoCard video={video} key={video._id} />
		);
											
		return (list);
	}
	
	render() {
		return (
			<div className="row video-list-row">
				<div className="col-sm-12">
					{this.createVideoList()}
				</div>
			</div>
		);
		
	}
}

export default VideoList;