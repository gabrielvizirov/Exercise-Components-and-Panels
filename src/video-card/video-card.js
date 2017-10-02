import React, {Component} from 'react';
import './video-card.css';

class VideoCard extends Component {
	render() {
		return (
			<div className="card video-card-container">
				<img className="card-img-top video-card-img" src={this.props.video.imgUrl} alt="Card image cap"></img>
				<div className="card-block">
					<div className="row video-card-row">
						<div className="col-4">
							<h4>{this.props.video.shotviews}</h4>
							<p>Shot Views</p>
						</div>
						<div className="col-4">
							<h4>{this.props.video.likes}</h4>
							<p>Likes</p>
						</div>
						<div className="col-4">
							<h4>{this.props.video.comments}</h4>
							<p>Comments</p>
						</div>
					</div>
				</div>
			</div>
		);
		
	}
}

export default VideoCard;