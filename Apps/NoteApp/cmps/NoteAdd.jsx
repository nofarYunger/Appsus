import { EventBusService } from "../../../services/EventBusService..js"

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
            }, currView: "NoteText", isEdit: false

        });

    }
    onReset = () => {
        this.setState({
            note: {
                type: "NoteText", info: {},
            }, currView: "NoteText", isEdit: false

        });

    }
    componentDidMount() {
        this.unsubscribe = EventBusService.on('edit', (note) => {
            if (!note) return
            console.log('edit');
            this.setState({ note, currView: note.type, isEdit: true })

        });

    }
    onInputChange = (ev) => {
        ev.preventDefault()
        var value = ev.target.value;
        var name = ev.target.name
        const noteCopy = { ...this.state.note };
        noteCopy.info[name] = value
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
        const { isEdit } = this.state

        return (
            <section className="NoteAdd">
                <button onClick={this.onReset}>X</button>
                <form onSubmit={this.onSubmit} ref={this.refForm}>
                    <select className="currView" name="currView" onChange={(ev) => { this.onChangeForm(ev) }}>
                        <option selected={currView === "NoteText" && "selected"} value="NoteText">Note</option>
                        <option selected={currView === "NoteImg" && "selected"} value="NoteImg">Img</option>
                        <option selected={currView === "NoteTodos" && "selected"} value="NoteTodos">Todos</option>
                    </select>
                    <DynamicCmp isEdit={isEdit} currView={currView} note={note.info} onInputChange={(ev) => this.onInputChange(ev)} />
                    <button type="submit">{(this.state.note.id) ? 'Update' : 'Add'}</button>

                </form>
            </section>)
    }
}
function DynamicCmp({ onInputChange, note, currView, isEdit }) {
    var currView = currView
    switch (currView) {
        case 'NoteText': return <NoteTxtForm isEdit={isEdit} note={note} onInputChange={onInputChange} />
        case 'NoteImg': return <NoteImgForm isEdit={isEdit} note={note} onInputChange={onInputChange} />
        case 'NoteTodos': return <NoteTodosForm isEdit={isEdit} note={note} onInputChange={onInputChange} />
    }
}

function NoteImgForm({ note, onInputChange, isEdit }) {
    return (
        <React.Fragment>
            <input name="title" value={isEdit ? note.title : ''} type="text" placeholder="Title..." onChange={(ev) => onInputChange(ev)} ></input>
            <input name="url" value={isEdit ? note.url : ''} type="text" placeholder="Url..." onChange={(ev) => onInputChange(ev)} ></input>
        </React.Fragment>

    )
}
function NoteTodosForm({ note, onInputChange, isEdit }) {
    return (
        <React.Fragment>
            <input name="label" value={isEdit ? note.label : ''} type="text" placeholder="Label..." onChange={(ev) => onInputChange(ev)} ></input>
            <input name="todos" value={isEdit ? note.todos : ''} type="text" placeholder="Todo..." onChange={(ev) => onInputChange(ev)} ></input>
        </React.Fragment>

    )
}
function NoteTxtForm({ note, onInputChange, isEdit }) {
    return (
        <React.Fragment>
            <textarea name="txt" value={isEdit ? note.txt : ''} type="text" placeholder="text..." onInput={(ev) => onInputChange(ev)}></textarea>
        </React.Fragment>
    )
}
