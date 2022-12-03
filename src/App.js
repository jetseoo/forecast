import './App.css';
import './background.css';

import React, { useContext } from 'react';
import Header from './Components/Header.js';
import Card from './Components/UI/Card.js';
import Today from './Components/Today.js';
import Details from './Components/Details';
import Tomorrow from './Components/Tomorrow.js';
import { DataContext } from './Components/DataContextProvider.js';

function App() {
  const { data } = useContext(DataContext);

  return (
    <div className="App">
      {Object.keys(data).length === 0 ? (
        <Card>Loading...</Card>
      ) : (
        <>
          <Header />

          <Card className={`main ${data.days[0].icon}-bg`}>
            <Today />
          </Card>

          <section className="secondary">
            <Details />

            <div className="secondary-right">
              <Tomorrow />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
