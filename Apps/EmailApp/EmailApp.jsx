import { EmailList } from './cmps/EmailList.jsx'
import { EmailSideBar } from './cmps/EmailSideBar.jsx'
import { EmailService } from './services/EmailService.js'
export class EmailApp extends React.Component {


    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails()
    }


    loadEmails = () => {
        EmailService.query().then(emails =>
            this.setState({ emails })
        )
    }




    render() {
        return (

            <section className="EmailApp-wrapper">
                <EmailList emails={this.state.emails} />
                <EmailSideBar />

            </section>

        );
    }
}
