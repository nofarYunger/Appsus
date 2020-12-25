
export function NoteTodos({ note }) {
    let todos = note.info.todos
    console.log(todos);
    let todosmap = todos.map(todo => {

        return <li key={todo.id} >{todo.txt} DonE At: {todo.doneAt} </li>
})

return (
    <div className="NoteTodos flex-col">
        <i className="fas fa-list"></i>
        <div>{note.info.label}</div>
        <ul className="flex">{todosmap}</ul>
    </div>)
}


