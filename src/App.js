import React, { useContext } from 'react';
import { Header } from './Components/header';
import { Card } from './Components/UI';
import { Today } from './Components/today';
import { Details } from './Components/details';
import { Tomorrow } from './Components/tomorrow';
import { Week } from './Components/week';
import { DataContext } from './Components/DataContextProvider.js';

import './App.css';

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
