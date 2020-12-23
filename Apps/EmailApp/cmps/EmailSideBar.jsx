import { EmailSort } from "./EmailSort.jsx";

const { Link } = ReactRouterDOM;

export function EmailSideBar({ callback }) {


    return (
        <aside className="EmailSideBar">

            <h1>side bar comes here</h1>
            <Link to='/Email/Compose'>
                <div>Compose New Email </div>
            </Link>
            <EmailSort onSort={callback} />
        </aside>
    )


}