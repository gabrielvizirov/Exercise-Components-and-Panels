import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Components
import Overview from '../overview/overview';
import VideoList from '../video-list/video-list';
import DailyStatistics from '../daily-statistics/daily-statistics';

class App extends Component {
	
  constructor(props) {
  	super(props);
  }
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Dashboard</h1>
        </header>
		
		<div className="container-fluid App-main">
			<div className="row">
				<div className="col-sm-9 col-app-left">
					<Overview />
					<VideoList />
				</div>
				<div className="col-sm-3 col-app-right">
					<DailyStatistics />
				</div>
			</div>
		</div>
		
      </div>
    );
  }
}

export default App;
