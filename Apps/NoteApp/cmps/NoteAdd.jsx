import { NoteImgForm } from "./forms/NoteImgForm.jsx";
import { NoteTodosForm } from "./forms/NoteTodosForm.jsx";
import { NoteTxtForm } from "./forms/NoteTxtForm.jsx";
import { UtilService } from "../../../services/UtilService.js"
import { NoteService } from "../services/NoteService.js"

var txt = { type: 'NoteText', info: { txt: '' }, style: '' }
// var img = { id: UtilService.makeId(), isPinned: false, type: 'NoteImg', info: { url: '', title: '' }, style: '' }
// var todos = { id: UtilService.makeId(), isPinned: false, type: 'NoteTodos', info: { id: UtilService.makeId(), txt: '', doneAt: 0 }, style: '.' }

export class NoteAdd extends React.Component {
    state = {
        note: txt
    }
    // componentDidMount() {
    //     this.setState({ note: txt })
    // }
    onSubmit = (ev) => {
        ev.preventDefault()

        NoteService.save(this.state.note).then(savedNote => {

            this.props.history.goBack();
        })
    }
    onInputChange = (ev) => {
        ev.preventDefault();//on input change
        const value = ev.target.value;
        if (!value) return
        var name = ev.target.name
        const noteCopy = { ...this.state.note };
        if (name.includes('info.')) {
            name = name.slice(5, name.length)
            noteCopy.info[name] = value; // like petCopy.name/power =
        }
        else { noteCopy[ev.target.name] = value } // like petCopy.name/power = 
        this.setState({
            note: noteCopy
        });
    }

    render() {
        const currView = 'txt'
        const { note } = this.state
        const DynamicCmp = () => {
            switch (currView) {
                case 'txt': return <NoteTxtForm submit={this.onSubmit} callback={this.onInputChange} note={note} />
                case 'img': return <NoteImgForm submit={this.onSubmit} callback={this.onInputChange} note={note} />
                case 'todos': return <NoteTodosForm submit={this.onSubmit} callback={this.onInputChange} note={note} />
            }
        }
        return (<section><DynamicCmp /> </section>)
    }
}



