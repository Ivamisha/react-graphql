import Menu from '../../components/Menu/Menu'
import TaskItem from '../../components/TaskItem/TaskItem'
import Pagination from '../../components/Pagintation/Pagintation'
import { useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_TODOS } from '../../queries/todos'
import { CREATE_TODO, UPDATE_TODO } from '../../queries/mutation'
import './style.scss'

const Main = () => {
  const [tasks, setTasks] = useState([])
  const [createTodo] = useMutation(CREATE_TODO)
  const [title, setTitle] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const { data, loading, error, refetch } = useQuery(GET_TODOS, {
    variables: {
      page: page,
      limit: limit,
    },
  })
  const [updateTodo] = useMutation(UPDATE_TODO)

  useEffect(() => {
    if (!loading) {
      setTasks(data.todos.data)
    }
  }, [data])

  const createNewTodo = () => {
    const arr = [...tasks]
    createTodo({
      variables: {
        input: {
          title: title,
          completed: false,
        },
      },
    }).then(({ data }) => {
      arr.push(data.createTodo)
      setTasks(arr)
    })
  }

  const updateTask = (id, taskValue) => {
    updateTask({
      variables: {
        id,
        value: {
          title: taskValue,
          completed: false,
        },
      },
    })
  }

  if (loading) {
    return <h1>Loading....</h1>
  }

  return (
    <div className="main">
      <button onClick={() => refetch({ page: 5 })}>чит кнопка</button>
      <Menu createNewTodo={createNewTodo} setTitle={setTitle} />
      <Pagination setPage={setPage} />

      <div className="main_tasks">
        {tasks.map((elem) => (
          <TaskItem key={elem.id} task={elem} />
        ))}
      </div>
    </div>
  )
}

export default Main
