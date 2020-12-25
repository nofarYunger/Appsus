import { BooksService } from '../services/BookService.js'

export class ReviewAdd extends React.Component {

    state = {
        book: null,
        review: {
            fullName: 'Book Reader',
            txt: 'Write your review here',
            rate: 0,
            readAt: ''
        }
    }

    componentDidMount() {
        // if (!this.state.book) return null
        console.log('this.props:', this.props);
        const { bookId } = this.props.match.params;
        BooksService.getById(bookId).then(book => {
            this.setState({ book });
        });
    }



    onInputChange = (ev) => {//on input change
        const value = ev.target.type === 'number' ? +ev.target.value
            : ev.target.value;
        console.log(value);

        const reviewCopy = { ...this.state.review };
        reviewCopy[ev.target.name] = value;

        this.setState({
            review: reviewCopy
        });
    };

    saveReview = (ev) => {
        ev.preventDefault();
        console.log('submited!!');
        const review = this.state.review
        const bookId = this.state.book.id
        BooksService.addReview(review, bookId).then(

            this.props.history.push(`/book/info/${bookId}`)
        )

    }




    render() {
        const review = this.state.review
        return (
            <form className="form-box" onSubmit={this.saveReview}>
                <textarea name="" id="" cols="30" rows="10" name="txt" value={review.txt} onChange={this.onInputChange}></textarea >

                <input type="text" placeholder='Full Name' name="fullName" value={review.fullName} onChange={this.onInputChange} />
                <input type="date" value={review.readAt} name="readAt" onChange={this.onInputChange} />

                <select id="rate" name="rate" value={review.rate} name="rate" onChange={this.onInputChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>
                <button>Submit Review</button>
            </form>
        )
    }
}