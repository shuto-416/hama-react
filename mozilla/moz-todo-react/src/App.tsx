import React, { useState, useRef, useEffect } from "react"
import Todo from "./components/Todo"
import Form from "./components/Form"
import { todoType } from "./index"
import FilterButton from "./components/FilterButton"
import { nanoid } from "nanoid"

const FILTER_MAP: any = {
  All: () => true,
  Active: (task: todoType) => !task.completed,
  Completed: (task: todoType) => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

export interface AppType {
  props_tasks: Array<todoType>
  unko?: Function
}

function App({
  props_tasks,
  unko = () => {
    console.log("なにもないよー")
  },
}: AppType) {
  const [tasks, setTasks] = useState<any>(props_tasks)
  const [filter, setFilter] = useState<string>("All")

  function addTask(name: any) {
    // if(unko) unko()

    unko()

    const newTask = { id: "todo-" + nanoid(), name: name, completed: false }
    setTasks([...tasks, newTask])
  }

  // const unko = {
  //   chinko: 1,
  //   manko: 2
  // }

  // const sex = {
  //   ...unko,
  //   completed: !task.completed
  // }

  // const kasu = {
  //   chinko: 1,
  //   manko: 2,
  //   completed: !task.completed
  // }

  // const kasu2 = {
  //   unko: {
  //     chinko: 1,
  //     manko: 2
  //   },
  //   completed: !task.completed
  // }

  // kasu2.unko.chinko

  // kasu.chinko

  // sex === kasu

  // const hoge = [1, 2, 3, 4]

  // const new_hoge =  [...hoge, 5,6,7,8] // 1-8

  function toggleTaskCompleted(id: any) {
    const updatedTasks = tasks.map((task: any) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(id: any) {
    const remainingTasks = tasks.filter((task: any) => id !== task.id)
    setTasks(remainingTasks)
  }

  function editTask(id: any, newName: any) {
    const editedTaskList = tasks.map((task: any) => {
      if (id == task.id) {
        return { ...task, name: newName }
      }
      return task
    })
    setTasks(editedTaskList)
  }

  function usePrevious(value: any) {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }

  const taskList: any = tasks
    .filter(FILTER_MAP[filter])
    .map((task: any) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task"
  const headingText = `${taskList.length} ${tasksNoun} remaining`
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const listHeadingRef: any = useRef(null)
  const prevTaskLength: any = usePrevious(tasks.length)

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus()
    }
  }, [tasks.length, prevTaskLength])

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" tabIndex={-1} ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  )
}

export default App
