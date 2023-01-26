import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <fieldset className='column'>
        <legend>Skills</legend>
        <ul>
          {this.props.skills.map((skill) => (
            <li key={skill.id}>
              <input defaultValue={skill.text}></input>
            </li>
          ))}
        </ul>

        <button type='button' className='add-skill-btn'>
          Add skill
        </button>
      </fieldset>
    );
  }
}

export default Skills;
