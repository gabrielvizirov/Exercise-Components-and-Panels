import React, {Component} from 'react';
import './daily-bounce-rate.css';

class DailyBounceRate extends Component {
	render() {
		return (
			<div className="card daily-bounce-rate-card">
				<div className="card-header">
					<p className="card-text">Bounce Rate</p>
					<h4 className="card-text">50%</h4>
				</div>
				<div className="card-block">
					<p className="card-text"></p>
				</div>
			</div>
		);
		
	}
}

export default DailyBounceRate;