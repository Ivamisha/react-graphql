import { useState } from 'react'
import './style.scss'

const TaskItem = (props) => {
  const [state, setState] = useState(false)
  return (
    <div className="task">
      {state ? (
        <>
          <input type="text" value={props.task.title} />

          <button onClick={() => setState(false)}>Галя отмена!</button>
        </>
      ) : (
        <>
          <h6>{props.task.title}</h6>

          <button onClick={() => setState(true)}>Редактируй меня!</button>
        </>
      )}
    </div>
  )
}
export default TaskItem
