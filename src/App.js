import React, { useState, useEffect } from 'react';
import Header from './Components/Header.js';
import Card from './Components/UI/Card.js';
import Today from './Components/Today.js';
import Details from './Components/Details';
import Tomorrow from './Components/Tomorrow.js';

import './App.css';
import './background.css';

const getFetchUrl = (location) => {
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=events&key=ALXSB6AVTSV9VTPZ6XRTWBH5E&contentType=json`;
};

function App() {
  const [data, updateData] = useState(null);
  const [adress, setAdreess] = useState('Batumi');

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(getFetchUrl(adress))).json();

      updateData(data);
    };
    dataFetch();
  }, [adress]);

  return (
    <div className="App">
      {data === null ? (
        <Card>Loading...</Card>
      ) : (
        <React.Fragment>
          <Header changeAdress={setAdreess} />

          <Card className={`main ${data.days[0].icon}-bg`}>
            <Today data={data}></Today>
          </Card>

          <section className="secondary">
            <Details data={data} />

            <div className="secondary-right">
              <Tomorrow data={data} />
            </div>
          </section>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
