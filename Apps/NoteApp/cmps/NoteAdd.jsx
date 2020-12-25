import { UtilService } from "../../../services/UtilService.js"
import { NoteService } from "../services/NoteService.js"
import { EventBusService } from '../../../services/EventBusService.js'



// var img = { id: UtilService.makeId(), isPinned: false, type: 'NoteImg', info: { url: '', title: '' }, style: '' }
// var todos = { id: UtilService.makeId(), isPinned: false, type: 'NoteTodos', info: { id: UtilService.makeId(), txt: '', doneAt: 0 }, style: '.' }

export class NoteAdd extends React.Component {
    state = {
        note: { type: "NoteText", info: {} }
    }
    onSubmit = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        const { onAdd } = this.props
        onAdd(this.state.note)
        this.refInput.current.reset()
    }

    onInputChange = (ev) => {
        ev.preventDefault()
        var value = ev.target.value;
        // if (!value) return
        var name = ev.target.name
        const noteCopy = { ...this.state.note };
        noteCopy.info = { [name]: value }
        // like petCopy.name/power = 
        this.setState({
            note: noteCopy
        });
    }
    refInput = React.createRef();

    render() {
        const { note } = this.state
        return (
            <section className="NoteAdd">
                <form onSubmit={this.onSubmit} ref={this.refInput}>
                    <DynamicCmp note={note.info} onInputChange={(ev) => this.onInputChange(ev)} />
                    <button type="submit">submit</button>
                </form>
            </section>)
    }
}
function DynamicCmp({ onInputChange, note }) {
    const currView = 'txt'
    switch (currView) {
        case 'txt': return <NoteTxtForm note={note} onInputChange={onInputChange} />
        case 'img': return <NoteImgForm note={note} onInputChange={onInputChange} />
        case 'todos': return <NoteTodosForm note={note} onInputChange={onInputChange} />
    }
}

function NoteImgForm({ note, onInputChange }) {
    return (
        <React.Fragment>
            <input name="title" type="text" placeholder="Note..." value={title} onChange={(ev) => onInputChange(ev)} ></input>
            <input name="url" type="text" placeholder="Note..." value={url} onChange={(ev) => onInputChange(ev)} ></input>
        </React.Fragment>

    )
}
function NoteTodosForm({ note, onInputChange }) {
    return (
        <React.Fragment>
            <input name="label" type="text" placeholder="Note..." onChange={(ev) => onInputChange(ev)} ></input>
            <input name="todos" type="text" placeholder="Note..." onChange={(ev) => onInputChange(ev)} ></input>
        </React.Fragment>

    )
}
function NoteTxtForm({ note, onInputChange }) {
    return (
        <React.Fragment>
            <textarea name="txt" type="text" placeholder="Note..." onInput={(ev) => onInputChange(ev)}></textarea>
        </React.Fragment>


    )
}
