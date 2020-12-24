import { NotePreview } from './NotePreview.jsx'
export function NoteList({ notes, onRemove }) {
    console.log(notes);
    return (<section className="NoteList container">
        <article className="note-list">
            {notes.map(note => {
                return <NotePreview key={note.id} note={note} onRemove={onRemove} />
            })}
        </article>  </section>)

}