import React from 'react';
import FilterablePeopleTable from './FilterablePeopleTable'
import './App.css'

const App = () => {
    return (
        <div  className="App">
            <h1 className="title mt-5">Таблица</h1>
            <FilterablePeopleTable/>
        </div>
    );
  };

  export default App;