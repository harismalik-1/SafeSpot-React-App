import './App.css';
import Sidebar from './components/Sidebar'
import Charts from './components/Charts'
import Alerts from './components/Alert'
import { useState } from 'react';


function App() {
  // const [clicked, setClicked] = useState(false);
  return (
    <div>
      <Sidebar/>
        {/* {clicked && <Charts />} 
        {!clicked && <Alerts />} */}

    </div>
  );
}

export default App;
