import React, {Component} from 'react';
import './daily-traffic.css';

class DailyTraffic extends Component {
	render() {
		return (
			<div className="card daily-traffic-card">
				<div className="card-header">
					<p className="card-text">Traffic</p>
					<h4 className="card-text">140.5 kb</h4>
				</div>
				<div className="card-block">
					<p className="card-text"></p>
				</div>
			</div>
		);
		
	}
}

export default DailyTraffic;