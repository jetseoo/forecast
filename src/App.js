import React, { useContext } from 'react';
import Header from './Components/header/Header.js';
import Card from './Components/UI/Card.js';
import Today from './Components/today/Today.js';
import Details from './Components/details/Details';
import Tomorrow from './Components/tomorrow/Tomorrow.js';
import { DataContext } from './Components/DataContextProvider.js';

import './App.css';
import Week from './Components/week/week.js';

function App() {
  const { data } = useContext(DataContext);

  if (!data || Object.keys(data).length === 0) {
    return <Card>Loading...</Card>;
  }

  return (
    <div className="App">
      <Header />

      <main className="main">
        <Today />
        <Tomorrow />
      </main>

      <section className="secondary">
        <Details />
        <Week />
      </section>
    </div>
  );
}

export default App;
