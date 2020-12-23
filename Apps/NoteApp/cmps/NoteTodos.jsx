import { NoteBar } from './NoteBar.jsx'
export function NoteTodos({ note }) {
    let todos = note.info.todos
    let todosmap = todos.map(todo => <li key={todo.id} >{todo.txt} DonE At: {todo.doneAt} </li>)
    return (<div className="card flex">
        <div>{note.info.label}</div>
        <ul className="flex">{todosmap}</ul>
        <i className="fas fa-list"></i>
        <NoteBar noteId={note.id} />
    </div>)
}


