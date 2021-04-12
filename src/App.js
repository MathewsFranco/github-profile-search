import React, { useState } from 'react'
import './App.css';
import CardsList from './components/CardsList';
import Form from './components/Form';



const App = () => {
  const [profiles, setProfiles] = useState([]);
  function addNewProfile(profileData) {
    setProfiles(prevState => [...prevState, profileData])
  }
  function delCard(profileId) {
    setProfiles(prevState => prevState.filter(item => item.id !== profileId))
}
  return (
    	<div className="App-header">
    	  <div className="header">The GitHub Cards App</div>
        <Form onSubmit={addNewProfile} />
        <CardsList 
        profiles={profiles}
        delCard={delCard} />
    	</div>
    );
} 

export default App;


// class App extends React.Component {
//   state = {
//     profiles: [],
//   };
//   addNewProfile = (profileData) => {
//   	this.setState(prevState => ({
//     	profiles: [...prevState.profiles, profileData],
//     }));
//   };
// 	render() {
//   	return (
//     	<div style={{backgroundColor:'#ddd'}}>
//     	  <div className="header">{this.props.title}</div>
//         <Form onSubmit={this.addNewProfile} />
//         <CardsList profiles={this.state.profiles} />
//     	</div>
//     );
//   }	
// }

// export default App;
