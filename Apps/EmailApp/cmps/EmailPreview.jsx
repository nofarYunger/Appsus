export class EmailPreview extends React.Component {


    state = {}

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


    render() {
        const email = this.props.email
        return (

            <div className="EmailPreview">
                {/* <span className={""}></span> */}
                <span className="body"> <span className="subj"> {email.subject} </span> {email.body}</span>
                <span className="from">{email.from}</span>

                <span className="time">{this.emailDate}</span>


            </div>

        );
    }
}


