const { Link } = ReactRouterDOM;
export function AppHeader() {


    return (<section className="AppHeader">

        <header>
            <ul>
        <div className="logo">
            <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </div>
                <li><a className="links" href="#user"><button className="signbutton" type="button">Sign in</button></a></li>
                <li><a href="#grid"><img className="grid" src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png" title="Google apps" /></a>
                </li>
                <Link to={'/Note'}><li><a href="#images">Notes</a></li></Link>
                <Link to={'/Email'}><li><a href="#gmail">Gmail</a></li></Link>
                {/* <Link to={'/Book'}> <li><a href="#books">Google Books</a></li></Link> */}
            </ul>
        </header>
        
    </section>
    )


}




