import { NoteBar } from './NoteBar.jsx'
export function NoteTxt({ note }) {
    return (<section>
        <div className="NoteTxt flex-col">
            <i className="fas fa-file-alt"></i>
            <p suppressContentEditableWarning="true" contentEditable> {note.info.txt}</p>
        </div>

    </section>
    )
}
