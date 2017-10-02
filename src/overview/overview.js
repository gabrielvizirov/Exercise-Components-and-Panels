import React, {Component} from 'react';
import './overview.css';

//Components
import NewMonthlyFollowers from '../new-monthly-followers/new-monthly-followers';
import Income from '../income/income';

class Overview extends Component {
	render() {
		return (
			<div className="row overview-row">
				<div className="col-sm-12 col-md-4 col-over-left">
					<NewMonthlyFollowers />
				</div>
				<div className="col-sm-12 col-md-8 col-over-right">
					<Income />
				</div>
			</div>
		);
		
	}
}

export default Overview;