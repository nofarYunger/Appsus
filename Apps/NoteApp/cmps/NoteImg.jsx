
export function NoteImg({ note }) {
    var src = note.info.url
    return (<div className="flex-col NoteImg">
        <i className="fas fa-images"></i>
        <div >{note.info.title}</div>
        <img src={src} />




    </div>)
}