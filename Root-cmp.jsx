
import { EmailApp } from './Apps/EmailApp/EmailApp.jsx';
import { NoteApp } from './Apps/NoteApp/NoteApp.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { Home } from './pages/home.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class App extends React.Component {


render() {
    return (
        <Router>
            <section className="app">

                <AppHeader/>
                    <Switch>

                        <Route path="/Note" component={NoteApp} />
                        <Route path="/Email" component={EmailApp} />
                        {/* <Route path="/About" component={About} /> */}
                        {/* <Route path="/" component={Home} /> */}
                    </Switch>

                </section>
            </Router>
        );
    }
}

