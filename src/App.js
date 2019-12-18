import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/universal/login/login.js';
import HomePageDave from './pages/dave/home/home.js';
import NewCaseDave from './pages/dave/new_case/new_case.js';
import UpdatesPageDave from './pages/dave/updates/updates.js';
import TasksPageDave from './pages/dave/tasks/tasks.js';
import HomePageJane from './pages/jane/home/home.js';
import UpdatesPageJane from './pages/jane/updates/updates.js';
import HeatMapJane from './pages/jane/heatmap/heatmap.js';
import HomePageWade from './pages/wade/home/home.js';
import NewUpdateWade from './pages/wade/new_update/new_update.js';
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
    const comment = {
      message: message,
      officer: data.officers[data.uid]
    }
    data.updates[update.id].comments.push(comment);
    this.setState({ data: data });
  }

  login = (name) => {
    let data = this.state.data;
    let newUid = 0;
    if (name == "wade") {
      newUid = 572;
    } else if (name == "dave") {
      newUid = 1;
    }

    data.uid = newUid;

    this.setState({ data: data });
  }

  addUpdate = (update) => {
    let newUpdates = this.state.data.updates;
    newUpdates[update.id] = update;

    let newOfficers = this.state.data.officers;
    newOfficers[update.officerId].posted_updates.push(update.id);
    newOfficers[update.officerId].read_updates.push(update.id);

    let newCases = this.state.data.cases;
    newCases[update.caseId].updates.push(update.id);

    this.setState({ updates: newUpdates, officers: newOfficers, cases: newCases }, () => { alert("Update filed successfully.") });

  }

  markComplete = (task) => {
    let data = this.state.data;
    data.tasks[task.id].complete = !data.tasks[task.id].complete;
    const date = new Date();
    data.tasks[task.id].completed = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
            <Route exact path="/" render={props => <LoginPage {...props} login={(name) => { this.login(name) }} />} />
            <Route exact path="/dave" render={props => <HomePageDave {...props} login={(name) => { this.login(name) }} />} />
            <Route exact path="/dave/new-case" render={props => <NewCaseDave {...props} />} />
            <Route exact path="/dave/updates" render={props => <UpdatesPageDave {...props} data={Object.values(this.state.data).length == 0 ? data : this.state.data} markAsRead={(update) => this.markAsRead(update)} toggleStarred={(id, isStarred) => this.toggleStarred(id, isStarred)} addReply={(message, update) => this.addReply(message, update)} />} />
            <Route exact path="/dave/tasks" render={props => <TasksPageDave {...props} />} />
            <Route exact path="/jane" render={props => <HomePageJane {...props} login={(name) => { this.login(name) }} />} />
            <Route exact path="/jane/updates" render={props => <UpdatesPageJane {...props} data={Object.values(this.state.data).length == 0 ? data : this.state.data} markAsRead={(update) => this.markAsRead(update)} toggleStarred={(id, isStarred) => this.toggleStarred(id, isStarred)} addReply={(message, update) => this.addReply(message, update)} />} />
            <Route exact path="/jane/heatmap" render={props => <HeatMapJane {...props} />} />
            <Route exact path="/wade" render={props => <HomePageWade {...props} login={(name) => { this.login(name) }} />} />
            <Route exact path="/wade/new-update" render={props => <NewUpdateWade {...props} uid={this.state.data.uid} cases={Object.values(data.cases).filter(c => { return data.officers[data.uid].cases.includes(c.id) })} onSubmit={(update) => { this.addUpdate(update) }} />} />
            <Route exact path="/wade/updates" render={props => <UpdatesPageWade {...props} data={Object.values(this.state.data).length == 0 ? data : this.state.data} markAsRead={(update) => this.markAsRead(update)} />} />
            <Route exact path="/wade/tasks" render={props => <TasksPageWade {...props} data={Object.values(this.state.data).length == 0 ? data : this.state.data} markAsRead={(update) => this.markAsRead(update)} markComplete={(update) => this.markComplete(update)} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
