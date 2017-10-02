import React, {Component} from 'react';
import './daily-statistics.css';

//Components
import Weather from '../weather/weather';
import DailyNewVisitors from '../daily-new-visitors/daily-new-visitors';
import DailyBounceRate from '../daily-bounce-rate/daily-bounce-rate';
import DailySearches from '../daily-searches/daily-searches';
import DailyTraffic from '../daily-traffic/daily-traffic';

class DailyStatistics extends Component {
	render() {
		return (
			<div className="row daily-stat-row">
				<div className="col-12 col-sm-12 statistics-col">
					<Weather />
				</div>
				<div className="col-12 col-sm-12 statistics-col">
					<DailyNewVisitors />
				</div>
				<div className="col-12 col-sm-12 statistics-col">
					<DailyBounceRate />
				</div>
				<div className="col-12 col-sm-12 statistics-col">
					<DailySearches />
				</div>
				<div className="col-12 col-sm-12 statistics-col">
					<DailyTraffic />
				</div>
			</div>
		);
		
	}
}

export default DailyStatistics;