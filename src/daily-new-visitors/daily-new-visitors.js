import React, {Component} from 'react';
import './daily-new-visitors.css';

class DailyNewVisitors extends Component {
	render() {
		return (
			<div className="card daily-new-visitors-card">
				<div className="card-header">
					<p className="card-text">New visitors</p>
					<h4 className="card-text">1.5k</h4>
				</div>
				<div className="card-block">
					<p className="card-text"></p>
				</div>
			</div>
		);
		
	}
}

export default DailyNewVisitors;