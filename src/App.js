import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'adgg', name: 'Connor', age: 23},
      {id: 'sadfdsf', name: 'Stephanie', age: 22},
      {id: 'sdew', name: 'Katie', age: 20},
    ],
    showPersons: false
  }

  deletePersonHandler = () => {
    const persons = [...this.state.persons];
    persons.splice(persons.Index, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // It's bad practice to directly mutate state, so this creates a new object using
    // the spread operator to assign the proper values and props to it.
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '8px',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              changed = {(event) => this.nameChangeHandler(event, person.id)}
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
            />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style.color = 'black';
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1> Hi, I'm a react app </h1>
        <p className={classes.join(' ')}> This is working well!</p>
        <button
          onClick={this.togglePersonsHandler}
          style = {style}
        >
          Toggle Peoples
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
