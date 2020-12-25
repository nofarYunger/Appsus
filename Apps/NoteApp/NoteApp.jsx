import { NoteAdd } from "./cmps/NoteAdd.jsx";
import { NoteFilter } from "./cmps/NoteFilter.jsx";
import { NoteList } from "./cmps/NoteList.jsx";
import { NoteService } from './services/NoteService.js'
import { EventBusService } from '../../services/EventBusService.js'

const { Link } = ReactRouterDOM;

export class NoteApp extends React.Component {
    state = {
        notes: '',
        filterBy: { type: '', txt: '' },
        editIsOn: false
    }
    componentDidMount() {
        this.loadNotes()
        this.unsubscribe = EventBusService.on('change', (note) => {
            console.log('NoteApp Mounted');
            if (!note) return
            NoteService.save(note)
                .then(() => this.loadNotes())
        });
    }

    onAdd = (note) => {
        NoteService.save(note)
            .then(() => this.loadNotes())
    }
    componentWillUnmount() {
        this.unsubscribe();
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
    getNotesForDisplay = () => {
        const { filterBy, notes } = this.state;
        if (!notes) return null
        const filterRegex = new RegExp(filterBy.txt, 'i');
        const filterType = filterBy.type
        if (!filterType) return notes.filter(note => filterRegex.test(note.type));
        return notes.filter(note => (filterRegex.test(note.type) && note.type === filterType));
    }
    // get notesForDisplay() {
    //     const { filterBy } = this.state;
    //     const filterRegex = new RegExp(filterBy.name, 'i');
    //     return this.state.pets.filter(pet => filterRegex.test(pet.name));
    // }


    render() {
        const { notes } = this.state
        const notesForDisplay = this.getNotesForDisplay();
        console.log(notesForDisplay);
        if (!notes) return <div>Loadiung</div>
        return (
            <section className="NoteApp">
                <header>
                    <NoteFilter setFilter={this.onSetFilter} />
                    <NoteAdd onAdd={this.onAdd} />
                </header >
                <NoteList notes={notesForDisplay} onRemove={this.onRemoveNote} />
            </section >

        );
    }
}