import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteBar } from './NoteBar.jsx'
export function NotePreview({ note, onRemove }) {
    let section = ' '
    if (note.type === "NoteText") section = <NoteTxt note={note} />
    else if (note.type === "NoteImg") section = <NoteImg note={note} />
    else if (note.type === "NoteTodos") section = <NoteTodos note={note} />
    return (<div ><div>{section}  </div><NoteBar note={note} onRemove={onRemove} /></div >)

}

