import { NotePreview } from './NotePreview.jsx'
export function NoteList({ notes }) {

    return (<section className="container">
        <article className="note-list">
            {notes.map(note => {
                return <NotePreview key={note.id} note={note} />
            })}
        </article>  </section>)

}