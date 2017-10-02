import React, {Component} from 'react';
import './income.css';

//Components
import AverageMonthlyIncome from '../average-monthly-income/average-monthly-income';
import YearlyIncomeGoal from '../yearly-income-goal/yearly-income-goal';

class Income extends Component {
	render() {
		return (
			<div className="row income-row">
				<div className="col-sm-12 col-md-6 col-income-left">
					<AverageMonthlyIncome />
				</div>
				<div className="col-sm-12 col-md-6 col-income-right">
					<YearlyIncomeGoal />
				</div>
			</div>
		);
		
	}
}

export default Income;