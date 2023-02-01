import React from 'react';
import Input from '../../Input';
import Label from '../../Label';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolInput: '',
    };
    this.schoolInputChange = this.schoolInputChange.bind(this);
  }

  schoolInputChange(e) {
    this.setState({ schoolInput: e.target.value });
  }

  render() {
    return (
      <fieldset className='column'>
        <legend>Education</legend>

        <Label id='school' labelText='School/Institute' />
        <Input
          id='school'
          type='text'
          value={this.state.schoolInput}
          handleChange={this.schoolInputChange}
        />

        <Label id='education-from' labelText='From:' />
        <Input
          id='education-from'
          type='date'
          value={this.state.educationStart}
          handleChange={this.educationStartChange}
        />

        <Label id='education-until' labelText='Until:' />
        <Input
          id='education-until'
          type='date'
          value={this.state.educationUntil}
          handleChange={this.educationUntilChange}
        />

        <Label id='education-degree' labelText='Degree:' />
        <Input
          id='education-degree'
          type='text'
          value={this.state.educationDegree}
          handleChange={this.educationDegreeChange}
        />
      </fieldset>
    );
  }
}

export default Education;
