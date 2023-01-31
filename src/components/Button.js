import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button type='button' onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
