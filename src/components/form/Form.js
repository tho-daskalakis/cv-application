import React from 'react';
import Education from './sections/Education';
import Experience from './sections/Experience';
import GeneralInformation from './sections/GeneralInformation';
import Skills from './sections/Skills';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <form className='form'>
        <GeneralInformation />
        <Education />
        <Experience />
        <Skills skills={this.state.formData.skills} />
      </form>
    );
  }
}

export default Form;
