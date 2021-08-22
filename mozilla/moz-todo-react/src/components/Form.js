import React, {useState} from "react"

export default function Form(props) {

    const [name, setName] = useState("")

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addTask(name)
        setName("")
    }

    return(
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={(event) => {
            handleChange(event)
          }}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )

}