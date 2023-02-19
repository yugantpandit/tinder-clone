import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './SwipeButton.css'
const SwipeButton = () => {
  return (
    <div className='swipeButton'>
        <IconButton className='repeat'>
       <ReplayIcon fontSize='large' /> 
       </IconButton>
       <IconButton className='left'>
       <CloseIcon fontSize='large'/>
       </IconButton>
       <IconButton className='fav'>
       <FavoriteIcon fontSize='large'/>
       </IconButton>
       <IconButton className='star'>
       <StarRateIcon fontSize='large'/>
       </IconButton>
       <IconButton className='lighting'>
       <FlashOnIcon fontSize='large'/>
       </IconButton>


      
    </div>
  )
}

export default SwipeButton
