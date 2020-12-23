import { EmailService } from "../services/EmailService.js"
import { EmailDetails } from "./EmailDetails.jsx"

export class EmailPreview extends React.Component {


    state = {
        isEmailOpen: false
    }

    componentDidMount() {

    }

    get emailDate() {

        const emailTimeStamp = this.props.email.sentAt

        const emailDate = new Date(emailTimeStamp).toDateString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1").substring(4, 11)//like "dec 23"

        const emailTime = new Date(emailTimeStamp).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1").substring(0, 5)//like "13:46"

        const todaysFullsDate = new Date().toDateString() //like "Wed Dec 23 2020"
        const emailsFullDate = new Date(emailTimeStamp).toDateString()

        if (emailsFullDate === todaysFullsDate) return emailTime // if the email was send today return the time
        else return emailDate // else return the date it was created
    }


    toggleDetails = () => {
        const isOpen = this.state.isEmailOpen
        this.setState({ isEmailOpen: !isOpen })
        const emailId = this.props.email.id
        EmailService.updateIsRead(emailId)
    }

    render() {
        const email = this.props.email
        return (

            <div onClick={this.toggleDetails} className={`EmailPreview ${!email.isRead && 'unRead'}`}>
                <div className="EmailPreviewShort">

                    <span className={"readBtn"}>⭐</span>
                    <span className="body"> <span className="subj"> {email.subject} </span> {email.body}</span>
                    <span className="from">{email.from}</span>
                    <span className="time">{this.emailDate}</span>
                </div>
                {this.state.isEmailOpen && <EmailDetails email={this.props.email} />}


            </div>

        );
    }
}


