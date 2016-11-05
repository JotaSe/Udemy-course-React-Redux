import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = process.env.YOUTUBE_KEY;

// Create a new component
const App = () => {
  return <div>
    <SearchBar />
  </div>;
}

ReactDom.render(<App />, document.querySelector('.container'));
