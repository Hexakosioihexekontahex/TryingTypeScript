import React, {useEffect, useState} from "react"
import TodoList from "./todo/TodoList"
// import Addtodo from "./todo/Addtodo"
import Loader from "./Loader"
import Context from './context'
import Modal from "./modal/Modal";

const Addtodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./todo/Addtodo'))
    }, 3000)
}))

function App() {
    const [todos, setTodos] = React.useState([
        /*{id: 1, completed: false, title: 'Buy bread'},
        {id: 2, completed: true, title: 'Buy milk'},
        {id: 3, completed: false, title: 'Buy oil'}*/
    ])
    const [loading, setloading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setloading(false)
                }, 2000)

            })
    }, [])

    function toggleTodo(id) {
        setTodos(
            todos.map(it => {
                if (it.id === id) {
                    it.completed = !it.completed
                }
                return it
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false
            }
        ]))
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className='wrapper'>
                <h1>React tutorial</h1>
                <Modal />

                <React.Suspense fallback={<p>Loading...</p>}>
                    <Addtodo onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}
                {todos.length > 0 ?
                    <TodoList todos={todos} onToggle={toggleTodo}/> :
                    (
                        loading ? null : <p>No todos</p>
                    )
                }

            </div>
        </Context.Provider>
    )
}

export default App;
