import { BooksService } from './services/BookService.js'
import { BookList } from './cmps/BookList.jsx'
import { BookAdd } from './cmps/BookAdd.jsx';
import { EventBusService } from '../../services/EventBusService.js'
import { BookFilter } from "../Apps/BookApp/cmps/BookFilter.jsx";

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: { fromPrice: 0, toPrice: 1000, title: '' }
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
    setFilter = (filter) => {
        // console.log(filter);
        this.setState({ filterBy: filter });
    };
    getBookForDisplay = () => {
        const { filterBy } = this.state;
        return this.state.books.filter(book => {
            return book.title.toLowerCase().includes(filterBy.title.toLowerCase()) &&
                book.listPrice.amount >= filterBy.fromPrice &&
                book.listPrice.amount <= filterBy.toPrice
        })
    };

    render() {
        return (
            <section className="BookApp">
                <BookAdd callBack={this.loadBooks} />
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                <BookList books={this.state.books} />

            </section>
        )
    }
}