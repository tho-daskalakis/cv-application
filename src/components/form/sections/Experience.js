import React from 'react';
import Input from '../../Input';
import Label from '../../Label';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleUntilChange = this.handleUntilChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleCompanyChange(e) {
    this.setState({ company: e.target.value });
  }

  handleFromChange(e) {
    this.setState({ from: e.target.value });
  }

  handleUntilChange(e) {
    this.setState({ until: e.target.value });
  }

  handlePositionChange(e) {
    this.setState({ position: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <fieldset className='column'>
        <legend>Experience</legend>

        <Label id='experience-company' labelText='Company:' />
        <Input
          id='experience-company'
          type='text'
          value={this.state.company}
          onChange={this.handleCompanyChange}
        />

        <Label id='experience-from' labelText='From:' />
        <Input
          id='experience-from'
          type='date'
          value={this.state.from}
          onChange={this.handleFromChange}
        />

        <Label id='experience-until' labelText='Until:' />
        <Input
          id='experience-until'
          type='date'
          value={this.state.until}
          onChange={this.handleUntilChange}
        />

        <Label id='experience-position' labelText='Position:' />
        <Input
          id='experience-position'
          type='text'
          value={this.state.position}
          onChange={this.handlePositionChange}
        />

        <Label id='experience-description' labelText='Description:' />
        <Input
          id='experience-description'
          type='text'
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
      </fieldset>
    );
  }
}

export default Experience;
