export class EmailFilter extends React.Component {
    state = {
        key: ''
    }


    handleChange = (ev) => {
        const { value } = ev.target
        this.setState({ key: value })

        this.props.callback(value)
    };
    render() {
        return (

            <div className="EmailFilter" >
                <input type="text" name="key" value={this.state.key} onChange={this.handleChange} />
            </div>

        );
    }
}


