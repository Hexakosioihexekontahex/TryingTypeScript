import React, {useEffect, useState} from 'react'
import TodoList from "./todo/TodoList"
// import AddTodo from "./todo/AddTodo"
import Loader from './Loader'
import Context from './context'
import Modal from "./modal/Modal"

// const AddTodo = React.lazy(() => new Promise(resolve => {
//     setTimeout(() => {
//         resolve(import('./todo/AddTodo'))
//     }, 3000)
// }))

const AddTodo = React.lazy(() => import('./todo/AddTodo'))

interface TodoModel {
    id: number,
    completed: boolean,
    title: string
}

function App() {
    const emptyTodoArray: TodoModel[] = []
    const [todos, setTodos] = React.useState(emptyTodoArray/*[
        {id: 1, completed: false, title: 'Buy bread'},
        {id: 2, completed: true, title: 'Buy milk'},
        {id: 3, completed: false, title: 'Buy oil'}
    ]*/)
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)

            })
    }, [])

    function toggleTodo(id: number) {
        setTodos(
            todos.map(it => {
                if (it.id === id) {
                    it.completed = !it.completed
                }
                return it
            })
        )
    }

    function removeTodo(id: number) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title: string) {
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
                    <AddTodo onCreate={addTodo}/>
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
