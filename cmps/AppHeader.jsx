const { Link } = ReactRouterDOM;
export function AppHeader() {


    return (<section className="AppHeader">

        <header>
            <ul>

                <img className="logo" alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />

                <li><a className="links" href="#user"><button className="signbutton" type="button">Sign in</button></a></li>
                <li><a href="#grid"><img className="grid" src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png" title="Google apps" /></a>
                </li>
                <Link to={'/Note'}><li>Notes</li></Link>
                <Link to={'/Email'}><li> </li></Link>
                {/* <Link to={'/Book'}> <li><a href="#books">Google Books</a></li></Link> */}
            </ul>
        </header>

    </section>
    )


}




