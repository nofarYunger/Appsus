export class NoteFilter extends React.Component {
    state = {
        filterBy: { type: '', txt: '' }
    }

    handleChange = (ev) => {
        console.log('filter');
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
        };
        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.name] = ev.target.value;
        this.setState({ filterBy }, callback);
    };

    render() {
        return <div className="NoteFilter">Filter <input name="txt" type="text" placeholder="Search" onChange={this.handleChange} />
            <select name="type" onChange={this.handleChange}>
                <option value=''>All</option>
                <option value='NoteImg'>Img</option>
                <option value='NoteText'>Text</option>
                <option value='NoteTodos'>Todos</option>
            </select></div>
    }
}