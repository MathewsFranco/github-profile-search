import React from 'react'
import './App.css';
import CardsList from './components/CardsList';
import Form from './components/Form';

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div style={{backgroundColor:'#ddd'}}>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardsList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default App;
