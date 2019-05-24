import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://localhost:3001/api',
    }
  }

  componentDidMount() {
    axios(this.state.url)
      .then(response => {
        this.setState({
          attendants: response.data,
        })
      });
  }

  render (){
    const { attendants } = this.state;
    return (
      <ul>
        {
          attendants && attendants.map(attendant => (
            <li key={attendant.member.id}>{attendant.member.name}</li>
          ))
        }
      </ul>
    );
  }
};

export default App;