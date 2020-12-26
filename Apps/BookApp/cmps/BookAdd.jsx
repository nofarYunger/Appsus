
import { BookAddService } from '../services/BookAddService.js'
import { BooksService } from '../services/BookService.js'
import { BookAddOption } from './BookAddOptions.jsx'
import { EventBusService } from '../../../services/EventBusService.js'

export class BookAdd extends React.Component {

    state = {
        key: '',
        options: []
    }


    addBookFromOptions = (book) => {
        BooksService.addBookToDB(book)
            .then(this.setState({
                key: '',
                options: []
            })).then(
                this.props.callBack()
            ).then(
                EventBusService.emit('success')
            )
    }

    onInputChange = (ev) => {//on input change

        const value = ev.target.value
        console.log(value);
        BookAddService.findOpt(value).then(
            options => {
                this.setState({
                    key: value,
                    options
                })
            }
        )
    };

    render() {
        return (
            <section className="google-search">
                <div className="add-book-bar">

                    <p>adding a new book!</p>
                    <input onChange={this.onInputChange} type="text" name="bookKey" placeholder="Add a new book"
                        value={this.state.key} />
                    {this.state.options.length && <div className="option-bar">
                        <BookAddOption options={this.state.options} callBack={this.addBookFromOptions} />
                    </div>}
                </div>
            </section>
        )
    }
}