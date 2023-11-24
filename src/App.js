import React, { useState, useEffect } from 'react';

import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import { fetchDataFromCSV } from './components/utils/DataLoader';

function App() {
  const [convertionState, setConvertionState] = useState({});

  useEffect(() => {
    fetchDataFromCSV()
      .then(data => {
        setConvertionState(data);

        console.log('Received data:', data);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Non Standard Units</h1>
        <div>
            <Search convertionState={convertionState}/>
        </div>
      </header>
      <div>
          <Home />
        </div>
    </div>
  );
}

export default App;
