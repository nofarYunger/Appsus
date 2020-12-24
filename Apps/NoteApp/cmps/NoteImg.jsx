
export function NoteImg({ note }) {
    var src = note.info.url
    return (<div className="card  flex">
        <i className="fas fa-images"></i>
        <div >{note.info.title}</div>
        <img src={src} />




    </div>)
}