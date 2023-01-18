import React from 'react';

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }

  render() {
    return (
      <fieldset className='column'>
        <legend>General Information</legend>

        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' maxLength='40'></input>

        <label htmlFor='title'>Title:</label>
        <input id='title' type='text'></input>

        <label htmlFor='address'>Address:</label>
        <input id='address' type='text'></input>

        <label htmlFor='phone'>Phone:</label>
        <input id='phone' type='text'></input>

        <label htmlFor='email'>email:</label>
        <input id='email' type='email'></input>
      </fieldset>
    );
  }
}

export default GeneralInformation;
