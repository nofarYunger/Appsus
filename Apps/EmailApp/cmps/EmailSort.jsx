export class EmailSort extends React.Component {


    state = {
        sortBy: ''
    }


    handleChange = (ev) => {
        const { value } = ev.target
        this.setState({ key: value })
console.log(this.props);
        this.props.onSort(value)
    };


    render() {
        return (

            <div className="EmailSort" >
                <h2>sort mail by:</h2>
                <label>Date <input type="radio" name="sortBy" value="date" onChange={this.handleChange}/></label>
                <label>Un Read <input type="radio" name="sortBy" value="unread" onChange={this.handleChange}/></label>
                <label>Importance <input type="radio" name="sortBy" value="importance" onChange={this.handleChange}/></label>
            </div>
        );
    }
}

