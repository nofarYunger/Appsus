export class NoteFilter extends React.Component {
    state = {
        filterBy: { type: '', txt: '' }
    }

    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
        };
        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.name] = ev.target.value;
        this.setState({ filterBy }, callback);
    };

    render() {
        return <div>Filter <input name="txt" type="text" placeholder="Search" onChange={this.handleChange} />
            <select name="type" onChange={this.handleChange}>
                <option value=''>All</option>
                <option value='Img'>Img</option>
                <option value='Text'>Text</option>
                <option value='Todos'>Todos</option>
            </select></div>
    }
}