import React from 'react';
import uniqid from 'uniqid';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [{ id: uniqid(), text: 'sample skill' }] };
  }

  addSkill = () => {
    this.setState({
      skills: this.state.skills.concat([
        { id: uniqid(), text: 'another skill' },
      ]),
    });
  };

  render() {
    return (
      <fieldset className='column'>
        <legend>Skills</legend>
        <ul>
          {this.state.skills.map((skill) => (
            <li key={skill.id}>
              <input defaultValue={skill.text}></input>
            </li>
          ))}
        </ul>

        <button onClick={this.addSkill} type='button' className='add-skill-btn'>
          Add skill
        </button>
      </fieldset>
    );
  }
}

export default Skills;
