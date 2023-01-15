import React from 'react';
import Education from './Education';
import GeneralInformation from './GeneralInformation';

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
      </form>
    );
  }
}

export default Form;
