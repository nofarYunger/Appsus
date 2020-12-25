import { UtilService } from "../../../services/UtilService.js"
import { NoteService } from "../services/NoteService.js"
import { EventBusService } from '../../../services/EventBusService.js'
import { NoteBar } from '../../NoteApp/cmps/NoteBar.jsx'



// var img = { id: UtilService.makeId(), isPinned: false, type: 'NoteImg', info: { url: '', title: '' }, style: '' }
// var todos = { id: UtilService.makeId(), isPinned: false, type: 'NoteTodos', info: { id: UtilService.makeId(), txt: '', doneAt: 0 }, style: '.' }

export class NoteAdd extends React.Component {
    state = {
        note: { type: "NoteText", info: {} },
        currView: 'NoteText'
    }
    onSubmit = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        const { onAdd } = this.props
        onAdd(this.state.note)
        this.refForm.current.reset()
        this.setState({
            note: {
                type: "NoteText", info: {},
            }, currView: "NoteText"

        });
    }

    onInputChange = (ev) => {
        ev.preventDefault()
        var value = ev.target.value;
        // if (!value) return
        var name = ev.target.name
        const noteCopy = { ...this.state.note };
        noteCopy.info[name] = value
        console.log(noteCopy);
        // like petCopy.name/power = 
        this.setState({
            note: noteCopy
        });
    }
    onChangeForm = (ev) => {
        ev.preventDefault()
        var value = ev.target.value;
        var noteCopy = { ...this.state.note };
        var viewCopy = { ...this.state.currView };
        viewCopy = value
        noteCopy.type = value
        this.setState({
            currView: viewCopy,
            note: noteCopy
        });
    }

    refForm = React.createRef();

    render() {
        const { note } = this.state
        const { currView } = this.state
        return (
            <section className="NoteAdd">
                <form onSubmit={this.onSubmit} ref={this.refForm}>
                    <select className="currView" name="currView" onChange={(ev) => { this.onChangeForm(ev) }}>
                        <option value="NoteText">txt</option>
                        <option value="NoteImg">img</option>
                        <option value="NoteTodos">todos</option>
                        F
                    </select>
                    <DynamicCmp currView={currView} note={note.info} onInputChange={(ev) => this.onInputChange(ev)} />
                    <button type="submit">submit</button>

                </form>
            </section>)
    }
}
function DynamicCmp({ onInputChange, note, currView }) {
    var currView = currView
    switch (currView) {
        case 'NoteText': return <NoteTxtForm note={note} onInputChange={onInputChange} />
        case 'NoteImg': return <NoteImgForm note={note} onInputChange={onInputChange} />
        case 'NoteTodos': return <NoteTodosForm note={note} onInputChange={onInputChange} />
    }
}

function NoteImgForm({ onInputChange }) {
    return (
        <React.Fragment>
            <input name="title" type="text" placeholder="Title..." onChange={(ev) => onInputChange(ev)} ></input>
            <input name="url" type="text" placeholder="Url..." onChange={(ev) => onInputChange(ev)} ></input>
        </React.Fragment>

    )
}
function NoteTodosForm({ onInputChange }) {
    return (
        <React.Fragment>
            <input name="label" type="text" placeholder="Label..." onChange={(ev) => onInputChange(ev)} ></input>
            <input name="todos" type="text" placeholder="Todo..." onChange={(ev) => onInputChange(ev)} ></input>
        </React.Fragment>

    )
}
function NoteTxtForm({ onInputChange }) {
    return (
        <React.Fragment>
            <textarea name="txt" type="text" placeholder="text..." onInput={(ev) => onInputChange(ev)}></textarea>
        </React.Fragment>


    )
}
