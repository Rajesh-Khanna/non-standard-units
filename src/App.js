import React, { useState, useEffect } from 'react';

import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import { fetchDataFromCSV } from './components/utils/DataLoader';
import { rowProcessing } from './components/utils/RowProcessing';

function App() {
  const [convertionState, setConvertionState] = useState({});

  useEffect(() => {
    fetchDataFromCSV()
      .then(({ headers, data}) => {
        const convertions = rowProcessing(data);

        setConvertionState(convertions);

        console.log('Received data:', convertions);
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
