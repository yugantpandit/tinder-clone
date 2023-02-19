import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
    const [people, setpeople] = useState([
    

    ])
    const swiped = (direction, nameToDelete) => {
        console.log('You swiped: ' + nameToDelete);
      }
      
      const outOfFrame = (name) => {
        console.log(name + ' left the screen')
      }
  return (
    <div className='tindercards'>
        <div className='tinderclass__container'>
        {people.map((people) =>  ( 
        <TinderCard
           className= "swipe"
           key={people.name}
           preventSwipe={["up","down"]}
           onSwipe= {(dir) => swiped(dir,people.name)}
           onCardLeftScreen={() => outOfFrame(people.name)}>
            
            <div
            style={{ backgroundImage: `url( ${people.url})`}} 
            className="card">
                <h1>{people.name}</h1>
      
    </div>
        </TinderCard>

            ))}
        </div>
     
        
   </div>
  );
}

export default TinderCards
