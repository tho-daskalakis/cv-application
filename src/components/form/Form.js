import React from 'react';
import Education from './sections/Education';
import Experience from './sections/Experience';
import GeneralInformation from './sections/GeneralInformation';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }

  render() {
    return (
      <form className='form'>
        <GeneralInformation />
        <Education />
        <Experience />
      </form>
    );
  }
}

export default Form;
