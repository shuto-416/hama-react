import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export interface todoType {
  id: string,
  name: string, 
  completed: boolean
}

const DATA: Array<todoType> = [
  { id:"todo-0", name:"Eat", completed:true },
  { id:"todo-1", name:"Sleep", completed:false },
  { id:"todo-2", name:"Repeat", completed:false }
]

ReactDOM.render(
  <React.StrictMode>
    <App props_tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
)
