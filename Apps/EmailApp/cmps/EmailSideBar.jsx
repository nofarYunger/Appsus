import { EmailSort } from "./EmailSort.jsx";

const { Link } = ReactRouterDOM;

export function EmailSideBar({ callback }) {


    return (
        <section>
            <aside className="EmailSideBar">


                <Link to='/Email/Compose'>
                    <div className="emailBtn"><i className="fas fa-envelope"></i> </div>
                </Link>
                <EmailSort onSort={callback} />
            </aside></section>
    )


}