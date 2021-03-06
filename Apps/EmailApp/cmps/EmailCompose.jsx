import { EmailService } from "../services/EmailService.js";

export class EmailCompose extends React.Component {

    state = {
        email: {
            subject: '',
            body: '',
            from: '',

        }
    };

    componentDidMount() { }

    onChangeInput = (target) => {//on input change
        const value = target.value;
        console.log(value);

        const emailCopy = { ...this.state.email };
        emailCopy[target.name] = value;

        this.setState({
            email: emailCopy
        });
    };

    addEmail = (ev) => {
        ev.preventDefault();
        EmailService.add(this.state.email)
            .then(this.props.history.push(`/Email`))
            .then(console.log('added!'))



    }


    render() {
        const { email } = this.state
        return (
            <form className="EmailCompose" onSubmit={this.addEmail}>
                <h1>New Message:</h1>
                <label > Subject:<input type="text" name="subject" placeholder="Subject" value={email.subject} onChange={(ev) => this.onChangeInput(ev.target)} /></label>
                <label > From:<input type="text" name="from" placeholder="Me" value={email.from} onChange={(ev) => this.onChangeInput(ev.target)} /></label>
                <label > To:<input type="text" placeholder="You" value="You" /></label>
                <label >Message: <textarea name="body" cols="10" rows="30" value={email.body} onChange={(ev) => this.onChangeInput(ev.target)} placeholder="enter your message here..."></textarea></label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}