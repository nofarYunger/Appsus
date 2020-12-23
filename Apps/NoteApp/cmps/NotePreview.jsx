import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'


export function NotePreview({ note }) {
    if (note.type === "NoteText") return <NoteTxt note={note} />
    else if (note.type === "NoteImg") return <NoteImg note={note} />
    else if (note.type === "NoteTodos") return <NoteTodos note={note} />
}

