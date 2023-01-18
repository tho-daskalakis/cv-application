import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }

  render() {
    return (
      <fieldset className='column'>
        <legend>Education</legend>

        <label htmlFor='school'>School/Institute:</label>
        <input id='school' type='text' maxLength='40'></input>

        <label htmlFor='from'>From:</label>
        <input id='from' type='date'></input>

        <label htmlFor='until'>Until:</label>
        <input id='from' type='date'></input>

        <label htmlFor='degree'>Degree:</label>
        <input id='degree' type='text' maxLength='40'></input>
      </fieldset>
    );
  }
}

export default Education;
