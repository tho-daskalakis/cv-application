import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <input
        id={this.props.id}
        type={this.props.type}
        onChange={this.props.onChange}></input>
    );
  }
}

export default Input;
