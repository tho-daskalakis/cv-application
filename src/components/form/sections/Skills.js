import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <fieldset className='column'>
        <legend>Skills</legend>
        <ul>
          {this.props.skills.map((skill) => (
            <li key={skill.id}>{skill.text}</li>
          ))}
        </ul>
      </fieldset>
    );
  }
}

export default Skills;
