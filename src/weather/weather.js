import React, {Component} from 'react';
import './weather.css';

class Weather extends Component {
	render() {
		return (
			<div className="card weather-card">
				<div className="card-block">
					<h4 className="card-title">18º</h4>
					<p className="card-text">Paris</p>
				</div>
			</div>
		);
		
	}
}

export default Weather;