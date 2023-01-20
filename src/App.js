import React from 'react';
import uniqid from 'uniqid';
import './App.css';
import Form from './components/form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { skills: [{ id: uniqid(), text: 'sample skill' }] },
    };
  }

  render() {
    return (
      <div className='App'>
        <Form formData={this.state.formData} />
      </div>
    );
  }
}

export default App;
