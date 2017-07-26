import './App.css';
import React, { Component } from 'react';
import CSSTransition from '../node_modules/react-transition-group/CSSTransition.js'
import Form from './components/Form';

class App extends Component {
  state = {
    mounted: true
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ mounted: false });
    console.log(this.state)
  }

  render() {
    return (
      <div className="app">
        <CSSTransition
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={true}
          transitionLeaveTimeout={300}
        >
          {this.state.mounted && <Form onSubmit={this.handleSubmit} />}
        </CSSTransition>
      </div>
    );
  }
}

export default App;