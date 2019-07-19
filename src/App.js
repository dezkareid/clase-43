/* global fetch */

import React from 'react'
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

const BASE_URL = 'http://localhost:3000/'

function getList () {
  return fetch(`${BASE_URL}items`)
    .then(response => response.json())
}

function saveTask (task) {
  return fetch(`${BASE_URL}items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
    .then(response => response.json())
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [],
      taskValue: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onAddTask = this.onAddTask.bind(this)
  }

  onAddTask (event) {
    event.preventDefault()
    const { taskValue, tasks } = this.state
    saveTask({ text: taskValue })
      .then(task => {
        this.setState({
          tasks: [...tasks, task],
          taskValue: ''
        })
      })
  }

  onChange (event) {
    this.setState({
      taskValue: event.target.value
    })
  }

  loadList () {
    return getList()
      .then(tasks => {
        this.setState({
          tasks
        })
      })
  }

  componentDidMount () {
    this.loadList()
  }
  render () {
    return (
      <div className='App'>
        <h1>Mi lista de pendientes</h1>
        <AddTask
          onAddTask={this.onAddTask}
          taskValue={this.state.taskValue}
          onChange={this.onChange}
        />
        <TaskList title='Tareas' tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
