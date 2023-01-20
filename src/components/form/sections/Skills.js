import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <fieldset className='column'>
        <legend>Skills</legend>
        <ul>
          {this.state.skills.map((skill) => (
            <li key={skill.id}>{skill.text}</li>
          ))}
        </ul>
      </fieldset>
    );
  }
}

export default Skills;
