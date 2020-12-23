import { EmailList } from './cmps/EmailList.jsx'
import { EventBusService } from '../../services/EventBusService.js'
import { EmailSideBar } from './cmps/EmailSideBar.jsx'
import { EmailService } from './services/EmailService.js'
import { EmailFilter } from './cmps/EmailFilter.jsx'
export class EmailApp extends React.Component {


    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails()
        this.unsubscribe = EventBusService.on('delete', (emailId) => {
            EmailService.deleteEmail(emailId)
            this.loadEmails()
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }


    loadEmails = () => {
        EmailService.query().then(emails =>
            this.setState({ emails })
        )
    }

    onSetFilter = (key) => {
        EmailService.filterBy(key)
            .then(emails => this.setState({ emails }))
    }

    onSetSort = (value) => {
        console.log('sorted!');
        EmailService.sortBy(value)
            .then(emails => this.setState({ emails }))
    }




    render() {
        return (

            <section className="EmailApp-wrapper">
                <EmailFilter callback={this.onSetFilter} />
                <EmailList emails={this.state.emails} />
                <EmailSideBar callback={this.onSetSort} />

            </section>

        );

    }

}