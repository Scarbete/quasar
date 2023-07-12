import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',

    initialState: {
        items: []
    },

    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                todo: action.payload,
                completed: false
            }
            state.items.push(newTodo)
        },
        removeTodo: (state, action) => {
            const ind = state.items.findIndex(
                todo => todo.id === action.payload
            )
            if (ind > -1) {
                state.items.splice(ind, 1)
            }
        },
        completeTodo: (state, action) => {
            const todo = state.items.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
    }
})

export const {addTodo, removeTodo, completeTodo} = todosSlice.actions
export default todosSlice.reducer