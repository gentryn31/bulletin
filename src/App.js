import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/universal/login/login.js';
import HomePageDave from './pages/dave/home/home.js';
import UpdatesPageDave from './pages/dave/updates/updates.js';
import TasksPageDave from './pages/dave/tasks/tasks.js';
import HomePageJane from './pages/jane/home/home.js';
import UpdatesPageJane from './pages/jane/updates/updates.js';
import HeatMapJane from './pages/jane/heatmap/heatmap.js';
import HomePageWade from './pages/wade/home/home.js';
import UpdatesPageWade from './pages/wade/updates/updates.js';
import TasksPageWade from './pages/wade/tasks/tasks.js';

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
    this.setState({ data: data }, () => { console.log(JSON.stringify(data)); });
  }

  markAsRead = (update) => {
    let data = this.state.data;
    data.officers[data.uid].read_updates.push(update.id);
    this.setState({ data: data });
  }

  toggleStarred = (id, isStarred) => {
    let data = this.state.data;
    if (isStarred) {
      data.officers[data.uid].starredCases.push(id);
    } else {
      data.officers[data.uid].starredCases = data.officers[data.uid].starredCases.filter(updateId => { return updateId != id });
    }
    this.setState({ data: data });
  }

  addReply = (message, update) => {
    let data = this.state.data;
    const reply = {
      message: message,
      officer: data.officers[data.uid]
    }
    data.updates[update.id].replies.push(reply);
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path="/" render={props => <LoginPage {...props} />} />
          <Route exact path="/dave" render={props => <HomePageDave {...props} />} />
          <Route exact path="/dave/updates" render={props => <UpdatesPageDave {...props} data={Object.values(this.state.data).length == 0 ? data : this.state.data} markAsRead={(update) => this.markAsRead(update)} toggleStarred={(id, isStarred) => this.toggleStarred(id, isStarred)} addReply={(message, update) => this.addReply(message, update)} />} />
          <Route exact path="/dave/tasks" render={props => <TasksPageDave {...props} />} />
          <Route exact path="/jane" render={props => <HomePageJane {...props} />} />
          <Route exact path="/jane/updates" render={props => <UpdatesPageJane {...props} data={Object.values(this.state.data).length == 0 ? data : this.state.data} markAsRead={(update) => this.markAsRead(update)} toggleStarred={(id, isStarred) => this.toggleStarred(id, isStarred)} addReply={(message, update) => this.addReply(message, update)} />} />
          <Route exact path="/jane/heatmap" render={props => <HeatMapJane {...props} />} />
          <Route exact path="/wade" render={props => <HomePageWade {...props} />} />
          <Route exact path="/wade/updates" render={props => <UpdatesPageWade {...props} data={Object.values(this.state.data).length == 0 ? data : this.state.data} markAsRead={(update) => this.markAsRead(update)} toggleStarred={(id, isStarred) => this.toggleStarred(id, isStarred)} addReply={(message, update) => this.addReply(message, update)} />} />
          <Route exact path="/wade/tasks" render={props => <TasksPageWade {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App;
