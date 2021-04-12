import React from 'react'
import Card from './Card'


const CardsList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

export default CardsList