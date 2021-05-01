import React, {useContext} from "react"
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4ps',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}
// &nbsp; - это пробел, &times; - кнопка закрытия
function TodoItem({ todo, index, onCheckBoxChangeListener }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    console.log('todo', todo)
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onCheckBoxChangeListener(todo.id)}/>
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className="rm" onClick={
                // () => removeTodo(todo.id)
                removeTodo.bind(null, todo.id) // same
            }>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onCheckBoxChangeListener: PropTypes.func.isRequired
}

export default TodoItem
