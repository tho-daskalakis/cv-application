import React from 'react';
import Button from '../Button';
import Education from './sections/Education';
import Experience from './sections/Experience';
import GeneralInformation from './sections/GeneralInformation';
import Skills from './sections/Skills';

class Form extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitForm} className='form'>
        <GeneralInformation />
        <Education />
        <Experience />
        <Skills />
        <Button text='Submit form' type='submit' />
      </form>
    );
  }
}

export default Form;
