import React from 'react';
import Button from '../Button';
import Education from './sections/Education';
import Experience from './sections/Experience';
import GeneralInformation from './sections/GeneralInformation';
import Skills from './sections/Skills';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateGeneralInformation = this.updateGeneralInformation.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
  }

  updateGeneralInformation(state) {
    this.setState({ generalInformation: state });
  }

  updateEducation(state) {
    this.setState({ education: state });
  }

  updateExperience(state) {
    this.setState({ experience: state });
  }

  submitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitForm} className='form'>
        <GeneralInformation updateFormState={this.updateGeneralInformation} />
        <Education updateFormState={this.updateEducation} />
        <Experience updateFormState={this.updateExperience} />
        <Skills />
        <Button text='Submit form' type='submit' />
      </form>
    );
  }
}

export default Form;
