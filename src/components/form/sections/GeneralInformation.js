import React from 'react';
import Input from '../../Input';
import Label from '../../Label';

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
    this.props.updateFormState(this.state);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
    this.props.updateFormState(this.state);
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
    this.props.updateFormState(this.state);
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
    this.props.updateFormState(this.state);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    this.props.updateFormState(this.state);
  }

  render() {
    return (
      <fieldset className='column'>
        <legend>General Information</legend>

        <Label id='general-info-name' labelText='Name:' />
        <Input
          id='general-info-name'
          type='text'
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <Label id='general-info-title' labelText='Title:' />
        <Input
          id='general-info-title'
          type='text'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />

        <Label
          id='general-info-address'
          labelText='(Province / State), Country'
        />
        <Input
          id='general-info-address'
          type='text'
          value={this.state.address}
          onChange={this.handleAddressChange}
        />

        <Label id='general-info-phone' labelText='Phone:' />
        <Input
          id='general-info-phone'
          type='text'
          value={this.state.phone}
          onChange={this.handlePhoneChange}
        />

        <Label id='general-info-email' labelText='e-mail:' />
        <Input
          id='general-info-email'
          type='email'
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
      </fieldset>
    );
  }
}

export default GeneralInformation;
