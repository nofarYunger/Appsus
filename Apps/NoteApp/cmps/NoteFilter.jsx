export class NoteFilter extends React.Component {
    render() {
        return <div>Filter <input type="text" placeholder="Search" />
            <select>
                <option>All</option>
                <option>Img</option>
                <option>Video</option>
                <option>Text</option>
            </select></div>
    }
}