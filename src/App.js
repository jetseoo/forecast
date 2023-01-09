import React, { useContext } from 'react';
import { Header } from './Components/header';
import { Today } from './Components/today';
import { Details } from './Components/details';
import { Tomorrow } from './Components/tomorrow';
import { Week } from './Components/week';
import { DataContext } from './Components/DataContextProvider.js';

import './App.css';

function App() {
  const { data } = useContext(DataContext);

  if (!data || Object.keys(data).length === 0) {
    return <div className="app">Loading...</div>;
  }

  return (
    <div className="app">
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
