import { EmailSort } from "./EmailSort.jsx";

const { Link } = ReactRouterDOM;

export function EmailSideBar({ callback }) {


    return (
        <aside className="EmailSideBar">

          
            <Link to='/Email/Compose'>
                <div className="emailBtn">Compose New Email </div>
            </Link>
            <EmailSort onSort={callback} />
        </aside>
    )


}