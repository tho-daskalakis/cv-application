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

        <label htmlFor='age'>Age:</label>
        <input id='age' type='number' min='1' max='99'></input>

        <label htmlFor='email'>e-mail:</label>
        <input id='email' type='email'></input>
      </fieldset>
    );
  }
}

export default GeneralInformation;
