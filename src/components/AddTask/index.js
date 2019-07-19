import React from 'react'
function AddTask (props) {
  return (
    <form onSubmit={props.onAddTask}>
      <label htmlFor='add-task-area'>Ingresa la tarea</label>
      <textarea
        value={props.taskValue}
        onChange={props.onChange}
      />
      <button>Agregar task a lista</button>
    </form>
  )
}

export default AddTask
