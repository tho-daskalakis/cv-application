import React from 'react';
import Education from './sections/Education';
import Experience from './sections/Experience';
import GeneralInformation from './sections/GeneralInformation';
import Skills from './sections/Skills';

class Form extends React.Component {
  render() {
    return (
      <form className='form'>
        <GeneralInformation />
        <Education />
        <Experience />
        <Skills skills={this.props.formData.skills} />
      </form>
    );
  }
}

export default Form;
