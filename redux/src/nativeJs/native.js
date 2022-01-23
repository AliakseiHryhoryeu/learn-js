import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const removeBtn = document.getElementById('remove')
const asyncAddBtn = document.getElementById('asyncAdd')
const themeBtn = document.getElementById('theme')

let state = 0

function render() {
    counter.textContent = state.toString()
}

addBtn.addEventListener('click',()=>{
    state++
    render()
})

removeBtn.addEventListener('click',()=>{
    state--
    render()
})

asyncAddBtn.addEventListener('click',()=>{
    setTimeout(()=>{
        state++
        render()
    },2000)
})

themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})


render()