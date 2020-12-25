import { EmailFilter } from "../Apps/EmailApp/cmps/EmailFilter.jsx";
import { NoteFilter } from "../Apps/NoteApp/cmps/NoteFilter.jsx";

const { NavLink, withRouter } = ReactRouterDOM;



export class _AppHeader extends React.Component {

    state = {
        pathname: ''
    }




    componentDidUpdate(prevProps, prevState) {
        console.log(this.props);
        const { pathname } = this.props.location
        console.log(pathname);
        if (prevState.pathname === pathname) return
        this.setState({ pathname })
    }


    render() {
        const { pathname } = this.state
        console.log('pathname:', pathname);
        return (<section className="AppHeader ">



            <header className="flex-row">
                <span className="flex-row" ><NavLink to={'/'}> <img className="logo" src="../assets/imgs/logo.png" />  </NavLink>
                    <h1 className="logo">Appsus</h1> </span>


                {pathname === '/Email' && <EmailFilter />}
                {pathname === '/Note' && <NoteFilter />}

                <ul>
                    <NavLink to={'/Note'}><li><i className="far fa-lightbulb"></i></li></NavLink>
                    <NavLink to={'/Email'}><li><i className="far fa-envelope"></i></li></NavLink>
                    <NavLink to={'/Book'}> <li><i className="fas fa-book"></i></li></NavLink>
                    <NavLink to={'/'}><li><i className="fas fa-th"></i></li></NavLink>
                </ul>
            </header>

        </section>
        )
    }


}


export const AppHeader = withRouter(_AppHeader);


