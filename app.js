import React, { Component } from 'react';
import ArticleList from './ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Blog</h1>
        <ArticleList />
      </div>
    );
  }
}

export default App;
