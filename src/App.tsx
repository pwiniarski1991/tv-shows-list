import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { List } from './components/list/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from './hooks/useDebounce';
import { State } from './types/state';
import { Table } from './components/table/Table';
import { RootState } from './types/rootState';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function App() {
  const dispatch = useDispatch();
  const list = useSelector<RootState>(state => state.list) as State;
  const [value, setValue] = useState('');
  const isPageLoaded = useRef(false);
  const debouncedValue = useDebounce(value, 500);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    if (isPageLoaded.current) {
      dispatch({ type: 'list/startFetching', payload: debouncedValue });
    } else {
      isPageLoaded.current = true;
    }

  }, [debouncedValue, dispatch]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>React redux app CRUD app</h1>
        <div className="App-container">
          <input className="App-input" type="text" onChange={onChange} value={value} />
        </div>
      </header>
      <div className="App-container">
        {list.isLoading ? <FontAwesomeIcon className="App-spinner" size="4x" icon={faSpinner} spin /> : null}
        {!list.error && list.tvShows.length ?
          <List items={list.tvShows} />
          : <p>{list.error}</p>}
        <Table />
      </div>
    </div>
  );
}

export default App;
