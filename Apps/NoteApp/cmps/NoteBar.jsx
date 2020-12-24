import { NoteImgForm } from "./forms/NoteImgForm.jsx";
import { NoteTodosForm } from "./forms/NoteTodosForm.jsx";
import { NoteTxtForm } from "./forms/NoteTxtForm.jsx";
import { UtilService } from "../../../services/UtilService.js"
import { NoteService } from "../services/NoteService.js"

export class NoteBar extends React.Component {
    state = {
        note: this.props.note
    }

    handleChange = (ev) => {
        ev.preventDefault();//on input change
        console.log(ev);
        const value = ev.target.value;
        console.log(value);
        if (!value) return
        var name = ev.target.name
        const noteCopy = { ...this.state.note };

        noteCopy.style[name] = value
        // like petCopy.name/power = 
        this.setState({ note: noteCopy })
        // NoteService.save(this.state.note)
    }


    render() {

        const { id } = this.props.note;
        const { style } = this.props.note;
        const { onRemove } = this.props;
        return (<ul className="note-bar " >
            <li onClick={() => { onRemove(id) }}><i className="fas fa-trash"></i></li>
            <li><i className="fas fa-thumbtack"></i></li>
            <li> <input name="backgroundColor" onChange={(event) => this.handleChange(event)} value={style} className="color-pallete" type="color" list="presets" />
                <datalist id="presets">
                    <option value="#cccccc">Grey</option>
                    <option value="#dda0dd">White</option>
                    <option value="#6699cc">Blue</option>
                    <option value="#dd1f68de">pink</option>
                    <option value="#a2ec9c">green</option>
                </datalist><i className="fas fa-palette">
                </i>
            </li>
            <li><i className="fas fa-edit"></i></li>
            <li ><i className="fas fa-check"></i></li>
        </ul >)
    }
}



