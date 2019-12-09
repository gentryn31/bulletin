import React, { Component } from 'react';
import UpdatesPageJane from './pages/jane/updates/updates.js';
import { data } from './testing_data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App" >
        <UpdatesPageJane data={data} />
      </div>
    );
  }
}

export default App;
