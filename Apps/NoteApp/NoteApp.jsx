import { NoteAdd } from "./cmps/NoteAdd.jsx";
import { NoteFilter } from "./cmps/NoteFilter.jsx";
import { NoteList } from "./cmps/NoteList.jsx";
import { NoteService } from './services/NoteService.js'

const { Link } = ReactRouterDOM;

export class NoteApp extends React.Component {
    state = {
        notes: ''
    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes = () => {
        NoteService.query()
            .then(notes => this.setState({ notes }))

    }

    render() {
        const notes = this.state.notes
        if (!notes) return null
        return (
            <section className="app">
                <header>
                    <NoteFilter />
                    <Link className="btn" to="/Note/edit/:noteId?">Add Note</Link>
                    <NoteList notes={notes} />
                </header>
            </section>

        );
    }
}
