import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
  }

  render() {
    console.log('[Person.js] inside render()');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years old! </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value = {this.props.name}/>
      </div>
    )
  }
}
  // this throws an error to show what errorboundary can do.
    // const rnd = Math.random();

    // if (rnd > 0.7) {
    //   throw new Error ('superhacker69 hacked u');
    // }

export default Person;