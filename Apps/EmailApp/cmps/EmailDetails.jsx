
import { EmailService } from '../services/EmailService.js';
const { Link } = ReactRouterDOM;

export class EmailDetails extends React.Component {

    state = {
        email: null
    };

    componentDidMount() {
        console.log(this.props);
        const { emailId } = this.props.match.params;
        console.log(bookId);
        EmailService.getEmailById(emailId).then(email => {
            this.setState({ email });
        });
    }




    getPriceClass = () => {
        const book = this.state.book
        if (book.listPrice.amount > 150) return 'red'
        else if (book.listPrice.amount < 20) return 'green'
    }


    bookPageCount = () => {
        const book = this.state.book
        if (book.pageCount > 500) return `Long reading`
        else if (book.pageCount > 200) return `Decent reading`
        else if (book.pageCount < 100) return `Light reading`
        else return book.pageCount
    }


    getPrice = () => {
        const book = this.state.book
        if (!book.listPrice) return `₪${book.price}`
        const curr = book.listPrice.currencyCode
        switch (curr) {
            case 'EUR':
                return `${book.listPrice.amount}€`;
            case 'ILS':
                return `₪${book.listPrice.amount}`;
            case 'USD':
                return `${book.listPrice.amount}$`;
            default:
                break;
        }

    }


    printReviews = () => {
        const book = this.state.book
        const reviews = book.reviews

        return reviews.map((review, idx) => {

            return <div className="review" key={idx}>
                <h3>{review.fullName}s review :</h3>
                <p> Rate:{review.rate}</p>
                <p> Read at: {review.readAt}</p>
                <p>{review.txt}</p>
            </div>
        })
    }



    render() {
        const book = this.state.book
        if (!book) return null
        return (
            <div className={`book-modal`}  >
                <img src={book.thumbnail} alt="" />
                <h1>{book.title}</h1>
                <h2>{book.subtitle}</h2>
                <h3>Authors:{book.authors}</h3>
                <p>Published Date: {book.publishedDate}</p>
                <p>pageCount: {book.pageCount} type: {this.bookPageCount()}</p>
                <h3 className={this.getPriceClass()}> {this.getPrice()}</h3>
                { book.listPrice.isOnSale && <img className={'sale-icon'} src="https://cdn4.iconfinder.com/data/icons/color-webshop/512/sale_shopping_online_sell-512.png" alt="" />}
                {book.reviews && this.printReviews()}
                <Link to={`/book`}> <button>X</button></Link>
                <Link to={`/book/info/${book.id}/editReview`}>Edit Review</Link>
            </div>
        );
    }
}