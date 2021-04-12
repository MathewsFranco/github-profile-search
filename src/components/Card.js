import React from 'react'
import DelButton from './DelButton';

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} alt="profile pic"/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
          <DelButton />
        </div>
    	</div>
    );
  }
}

export default Card;