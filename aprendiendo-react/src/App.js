/*import logo from './logo.svg';*/
import './App.css';
import React, {Component} from 'react';
import tasks from './sample/tasks.json';
//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description,
      done: false
    }
    console.log( newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks});
    console.log(newTasks)
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        // statement
        task.done = !task.done;
      }
      return task
    });
    this.setState({tasks: newTasks})
  }

  render() {
    return <div>
        <TaskForm addTask={this.addTask}/>
        <Tasks 
        tasks={this.state.tasks} 
        deleteTask={this.deleteTask}
        checkDone={this.checkDone}/>
        <Posts />
    </div>
  }
}

export default App;

/*function Saluda() {
    // body... 
    return (
        <div class="hello">hello world</div>
    )
}

function holamundo() {
    return (
        <div class="hello">Hola mundo</div>
    )
}

let noHayTexto = () => <div class="hello">No hay testo</div>

const ChaoMundo = () => <div class="hello">chao mundo</div>*/

/*function DiAlgo(props) {
    return (<div class="hello"> 
    <h3>{props.subtitle}</h3>
     {props.texto} 
     </div>)
}*/

/*class DiAlgo extends React.Component {

    toggleShow = () => {
        //if (this.state.mostrar) {
        //  // statement
        //  this.setState({ mostrar: false })
        //} else {
        //  // statement
        //  this.setState({ mostrar: true })
        //}
        this.setState({ mostrar: !this.state.mostrar })

    }

    state = {
        mostrar: true,
    }
    render() {
        if (this.state.mostrar) {
            return (
                <div class="hello"> 
    <h3>{this.props.subtitle}</h3>
     {this.props.texto}
     <button onClick={this.toggleShow}>Ocultar</button>
     </div>
            )
        }
        return (
            <div class="hello"> 
    <h3>{this.props.nada}</h3>
    <button onClick={this.toggleShow}>Mostrar</button>
     </div>
        )
    }
}

function App() {
    return (
        <div className="App">This is my component:
     <Saluda/> {holamundo()} {noHayTexto()} <ChaoMundo/> 
     <DiAlgo texto="hola mi compa"/>
     <DiAlgo texto="hola mi yabe" subtitle="Que mas" nada="no hay nada que mostrar"/>
     </div>
    );
}*/