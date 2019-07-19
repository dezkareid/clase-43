import React from 'react'

function TaskList (props) {
  const tasks = props.tasks.map((task) => (<li key={task.id}>{task.text}</li>))
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {tasks}
      </ul>
    </div>
  )
}
export default TaskList
