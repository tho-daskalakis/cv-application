import React from 'react';
import Input from '../../Input';
import Label from '../../Label';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <fieldset className='column'>
        <legend>Experience</legend>

        <Label id='experience-company' labelText='Company:' />
        <Input
          id='experience-company'
          type='text'
          value={this.state.experienceInput}
          onChange={this.experienceInputChange}
        />

        <Label id='experience-from' labelText='From:' />
        <Input
          id='experience-from'
          type='date'
          value={this.state.experienceStart}
          onChange={this.experienceStartChange}
        />

        <Label id='experience-until' labelText='Until:' />
        <Input
          id='experience-until'
          type='date'
          value={this.state.experienceUntil}
          onChange={this.experienceUntilChange}
        />

        <Label id='experience-position' labelText='Position:' />
        <Input
          id='experience-position'
          type='text'
          value={this.state.experiencePosition}
          onChange={this.experiencePositionChange}
        />

        <Label id='experience-description' labelText='Description:' />
        <Input
          id='experience-description'
          type='text'
          value={this.state.experienceDescription}
          onChange={this.experienceDescriptionChange}
        />
      </fieldset>
    );
  }
}

export default Experience;
