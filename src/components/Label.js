import React from 'react';

class Label extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.id} id={`label-for-${this.props.id}`}>
        {this.props.labelText}
      </label>
    );
  }
}

export default Label;
