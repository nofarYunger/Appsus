import { BooksService } from './services/BookService.js'
import { BookList } from './cmps/BookList.jsx'
import { BookAdd } from './cmps/BookAdd.jsx';
import { EventBusService } from '../../services/EventBusService.js'

export class BookApp extends React.Component {

    state = {
        books: [],
    }

    componentDidMount() {
        this.unsubscribe = EventBusService.on('success', () => {
            swal("Good job!", "You added a book!", "success");
        });

        this.loadBooks()
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    loadBooks = () => {
        BooksService.query().then((books) => {
            this.setState({ books })
        })
    }



    render() {
        return (
            <section className="BookApp">
                <BookAdd callBack={this.loadBooks} />
                {/* <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} /> */}
                <BookList books={this.state.books} />

            </section>
        )
    }
}