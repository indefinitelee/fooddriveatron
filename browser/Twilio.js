import React from 'react';
import ReactDom from 'react-dom';
import 'whatwg-fetch';

class Twilio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: ''
    };
  }

  changeInput(event) {
    this.setState({recipeint: event.target.value});
  }

  sendSms() {
    fetch('/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'applicaton/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({"recipient": this.state.recipient})
    });
  }

  render() {
    return (
      )
  }
}
