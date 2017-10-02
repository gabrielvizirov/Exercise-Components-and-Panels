import React, {Component} from 'react';
import './daily-searches.css';

class DailySearches extends Component {
	render() {
		return (
			<div className="card daily-searches-card">
				<div className="card-header">
					<p className="card-text">Searches</p>
					<h4 className="card-text">28%</h4>
				</div>
				<div className="card-block">
					<p className="card-text"></p>
				</div>
			</div>
		);
		
	}
}

export default DailySearches;