import { NoteAdd } from "./cmps/NoteAdd.jsx";
import { NoteFilter } from "./cmps/NoteFilter.jsx";
import { NoteList } from "./cmps/NoteList.jsx";
import { NoteService } from './services/NoteService.js'

const { Link } = ReactRouterDOM;

export class NoteApp extends React.Component {
    state = {
        notes: '',
        filterBy: { type: '', txt: '' },
        editIsOn: false
    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes = () => {
        NoteService.query()
            .then(notes => this.setState({ notes }))

    }
    onRemoveNote = (noteId) => {
        console.log(noteId);
        NoteService.remove(noteId).then(() => {
            this.loadNotes()
        })
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy });
    }
    onShowEdit = () => {
        this.setState({ editIsOn: true });
    }
    // getNotesForDisplay = () => {
    //     const { filterBy, notes } = this.state;
    //     const filterRegex = new RegExp(filterBy.name, 'i');
    //     const filterType = filterBy.type
    //     return notes.filter(note => filterRegex.test(note.name) && filterType === note.type);
    // }
    // get notesForDisplay() {
    //     const { filterBy, notes } = this.state;
    //     const filterRegex = new RegExp(filterBy.name, 'i');
    //     const filterType = filterBy.type
    //     return notes.filter(note => { filterRegex.test(note.name) && filterType === note.type });
    // }
    render() {
        const { notes } = this.state
        // const notesForDisplay = this.notesForDisplay;
        if (!notes) return null
        return (
            <section className="NoteApp">
                <header>
                    <NoteFilter setFilter={this.onSetFilter} />
                    <NoteAdd />
                </header >
                <NoteList notes={notes} onRemove={this.onRemoveNote} />
            </section >

        );
    }
}