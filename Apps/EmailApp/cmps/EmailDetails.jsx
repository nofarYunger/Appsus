
import { EventBusService } from '../../../services/EventBusService.JS';
// import { EmailService } from '../services/EmailService.js';
// const { Link } = ReactRouterDOM;

export class EmailDetails extends React.Component {

    state = {
        email: {}
    };

    componentDidMount() {
        this.setState({ email: this.props.email })
    }

    deleteEmail = (ev) => {
        ev.preventDefault();
        const emailId = this.state.email.id
        EventBusService.emit('delete', emailId)
    }


    render() {

        const email = this.state.email
        if (!email) return null
        return (
            <div className={`EmailDetails`}  >
                <h1>{email.subject}</h1>
                <p><span>{email.from}</span> <span className="emailAddress">{`<${email.from}@gmail.com>`}</span></p>
                <p>{email.body}</p>
                <div className="emailDitBtns" ><button className="btn" onClick={(ev) => this.deleteEmail(ev)}>🗑</button> <button onClick={this.toggleStarEmail} className="btn">⭐</button></div>
            </div>

        );
    }
}