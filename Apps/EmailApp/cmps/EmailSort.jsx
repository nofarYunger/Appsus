export class EmailSort extends React.Component {
    state = {
        sortBy: ''
    }

    handleChange = (ev) => {
        const { value } = ev.target
        this.setState({ key: value })
        this.props.onSort(value)
    };

    render() {
        return (

            <div className="EmailSort" >
                <h2>Sort mail by:</h2>
                <select onChange={this.handleChange} name="sortBy" id="">
                    <option value="unread">Un Read</option>
                    <option value="date">Date</option>
                    <option value="importance">Importance</option>

                </select>

            </div>
        );
    }
}

