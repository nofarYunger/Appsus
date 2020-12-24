import { NoteBar } from './NoteBar.jsx'
export function NoteTxt({ note }) {
    return (<section>
        <div className="NoteTxt flex">
            <i className="fas fa-file-alt"></i>
            {note.info.txt}

        </div>

    </section>
    )
}