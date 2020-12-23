export class NoteAdd extends React.Component {
    state = {
        note: { txt }
    }

    onInputChange = (ev) => {//on input change
        const value = ev.target.type === 'number' ? +ev.target.value
            : ev.target.value;
        const noteCopy = { ...this.state.Notes };
        noteCopy[ev.target.name] = value; // like petCopy.name/power = 
        this.setState({
            note: noteCopy
        });
    };

    render() {
        return (
            <form >
                <textarea type="text" onChange={this.onInputChange} placeholder="Note..."></textarea>
                <button type="submit">submit</button>

            </form>

        )
    }
}

