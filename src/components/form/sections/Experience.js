import React from 'react';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }

  render() {
    return (
      <fieldset className='column'>
        <legend>Experience</legend>

        <label htmlFor='company'>Company:</label>
        <input id='company' type='text'></input>

        <label htmlFor='from'>From:</label>
        <input id='from' type='date'></input>

        <label htmlFor='until'>Until:</label>
        <input id='until' type='date'></input>

        <label htmlFor='position'>Position:</label>
        <input id='position' type='text'></input>

        <label htmlFor='description'>Description:</label>
        <input id='description' type='text'></input>
      </fieldset>
    );
  }
}

export default Experience;
