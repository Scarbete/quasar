import {addTodo, completeTodo, removeTodo} from '../store/todosSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export default function TodoList () {
    const { items } = useSelector(state => state.todos)
    const [ val, setVal ] = useState('')
    const dispatch = useDispatch()

    const buttonClick = () => {
        if (val.trim() !== '') {
            dispatch(addTodo(val))
            setVal('')
        }
    }

    return   (
        <div className={'wrapper'}>
            <h1>TodoList</h1>
            <input
                type="text"
                placeholder="Add New todo..."
                value={val}
                onChange={(event) => setVal(event.target.value)}
            />
            <button className={'addTodo'} onClick={buttonClick}>
                Add Todos
            </button>

            {items && <> {items.map(item =>
                <div
                    className={'todoCard'}
                    key={item.id}
                    style={{background: item.completed ? '#8eff7f' : 'transparent' }}
                >
                    <p className={'todoTitle'}>
                        {item.todo}
                    </p>
                    <div className={'todoBtns'}>
                        <button className={'deleteTodo'}
                                onClick={() => dispatch(removeTodo(item.id))}>&#10539;
                        </button>
                        <button className={'completeTodo'}
                                onClick={() => dispatch(completeTodo(item.id))}>&#10004;
                        </button>
                    </div>
                </div>)}
            </>}
        </div>
    )
}