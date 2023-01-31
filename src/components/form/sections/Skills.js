import React from 'react';
import uniqid from 'uniqid';
import Button from '../../Button';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [{ id: uniqid(), text: '' }] };
  }

  addSkill = (e) => {
    e.preventDefault();

    this.setState({
      skills: this.state.skills.concat([{ id: uniqid(), text: '' }]),
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

        <Button text='Add skill' handleClick={this.addSkill} type='button' />
      </fieldset>
    );
  }
}

export default Skills;
