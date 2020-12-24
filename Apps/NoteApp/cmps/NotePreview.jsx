import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteBar } from './NoteBar.jsx'

export function NotePreview({ note, onRemove }) {
    console.log(note);
    var currView = note.type
    var bColor = note.style.backgroundColor
    const DynamicCmp = () => {
        switch (currView) {
            case 'NoteText': return <NoteTxt note={note} />
            case 'NoteImg': return <NoteImg note={note} />
            case 'NoteTodos': return <NoteTodos note={note} />
        }


    }
    return (<div className="NotePreview card" style={{ backgroundColor: bColor }} ><DynamicCmp /><NoteBar note={note} onRemove={onRemove} /></div >)
}