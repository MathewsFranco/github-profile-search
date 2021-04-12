import React from 'react'
import Card from './Card'




const CardsList = (props) => {
return(
	<div>
  	{props.profiles.map(profile => 
		<Card 
		key={profile.id}
		{...profile}
    delCard={props.delCard} 
		/>
		
		)}
	</div>
);
}

export default CardsList