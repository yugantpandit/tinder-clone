
import './App.css';
import './Header.js'
import Header from './Header.js';
import { styled } from '@mui/system';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';

function App() {
  return (
    <div>
<Header/>
<TinderCards/>
<SwipeButton/>
     
    </div>
  );
}

export default App;
