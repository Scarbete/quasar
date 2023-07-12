import { configureStore } from "@reduxjs/toolkit"
import todosReducer from './todosSlice.jsx'

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default store