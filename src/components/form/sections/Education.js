import React from 'react';
import Input from '../../Input';
import Label from '../../Label';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleUntilChange = this.handleUntilChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
  }

  handleSchoolChange(e) {
    this.setState({ school: e.target.value });
    this.props.updateFormState(this.state);
  }

  handleFromChange(e) {
    this.setState({ from: e.target.value });
    this.props.updateFormState(this.state);
  }

  handleUntilChange(e) {
    this.setState({ until: e.target.value });
    this.props.updateFormState(this.state);
  }

  handleDegreeChange(e) {
    this.setState({ degree: e.target.value });
    this.props.updateFormState(this.state);
  }

  render() {
    return (
      <fieldset className='column'>
        <legend>Education</legend>

        <Label id='school' labelText='School/Institute' />
        <Input
          id='school'
          type='text'
          value={this.state.school}
          handleChange={this.handleSchoolChange}
        />

        <Label id='education-from' labelText='From:' />
        <Input
          id='education-from'
          type='date'
          value={this.state.from}
          handleChange={this.handleFromChange}
        />

        <Label id='education-until' labelText='Until:' />
        <Input
          id='education-until'
          type='date'
          value={this.state.until}
          handleChange={this.handleUntilChange}
        />

        <Label id='education-degree' labelText='Degree:' />
        <Input
          id='education-degree'
          type='text'
          value={this.state.degree}
          handleChange={this.handleDegreeChange}
        />
      </fieldset>
    );
  }
}

export default Education;
