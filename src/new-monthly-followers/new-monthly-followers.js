import React, {Component} from 'react';
import './new-monthly-followers.css';

class NewMonthlyFollowers extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-block">
					<h4 className="card-title">20</h4>
					<p className="card-text">New followers added this month</p>
				</div>
			</div>
		);
		
	}
}

export default NewMonthlyFollowers;