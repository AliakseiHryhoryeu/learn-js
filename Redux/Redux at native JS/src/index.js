// import { createStore } from './nativeJs/createStore'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.scss'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const removeBtn = document.getElementById('remove')
const asyncAddBtn = document.getElementById('asyncAdd')
const themeBtn = document.getElementById('theme')

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk,logger))
)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
    const temp = store.getState()
})

removeBtn.addEventListener('click', () => {
    store.dispatch(decrement())

})

asyncAddBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState()

    counter.textContent = state.counter

    document.body.className = state.theme.value;

    [addBtn, removeBtn, themeBtn, asyncAddBtn].forEach(btn => { btn.disabled = state.theme.disabled })
})

store.dispatch({ type: 'INIT__APPLICATION' })



// how logger & middleware worked
// function logger(state) {
//     return function (next) {
//         return function (action) {
//             console.log('Prev State: ', state.getState())
//             console.log('Action: ', action)
//             const newState = next(action)
//             console.log('New State: ', newState)

//             return next(action)
//         }
//     }
// }

// devtools
// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk, logger),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )