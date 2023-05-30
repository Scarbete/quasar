import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {addTodo, deleteTodo, fetchTodos} from '../store/todoReducer'

export default function TodoList () {
    const [newTodo, setNewTodo] = useState('')
    const todo = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const inputTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const sendForm = () => {
        if (newTodo.trim() !== ''){
            dispatch(addTodo(newTodo))
            setNewTodo('')
        }
    }

    const clickDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo))
    }

    return (
        <div>
            <h4>TodoList</h4>
            <input type="text" onChange={inputTodo} value={newTodo}/>
            <button onClick={sendForm}>Добавить</button>

            <div>
                {todo && <ul>{todo.map(t =>
                    <li key={t.id} onClick={() => clickDeleteTodo(t)}>
                        {t.title}
                    </li>)}
                </ul>}
            </div>
        </div>
    )
}