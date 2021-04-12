import React from 'react'

const DelButton = ({profileId, delCard}) => {
  return(
    <button 
    className='del-btn'
    onClick={() => delCard(profileId)}
    >del</button>
  )
}

export default DelButton