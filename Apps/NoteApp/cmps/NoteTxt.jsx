import { NoteBar } from './NoteBar.jsx'
export function NoteTxt({ note }) {
    return (<section>
        <div className="card flex">{note.info.txt}
            <i className="fas fa-file-alt"></i>
            <NoteBar noteId={note.id} />
        </div>

    </section>
    )
}