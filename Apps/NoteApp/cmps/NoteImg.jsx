import { NoteBar } from './NoteBar.jsx'
export function NoteImg({ note }) {
    var src = note.info.url
    return (<div className="card  flex">
        <div >{note.info.title}</div>
        <img src={src} />
        <i className="fas fa-images"></i>
        <NoteBar noteId={note.id} />


    </div>)
}