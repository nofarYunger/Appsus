import { NoteImgForm } from "./forms/NoteImgForm.jsx";
import { NoteTodosForm } from "./forms/NoteTodosForm.jsx";
import { NoteTxtForm } from "./forms/NoteTxtForm.jsx";
import { UtilService } from "../../../services/UtilService.js"
import { NoteService } from "../services/NoteService.js"


export class NoteBar extends React.Component {
    render() {
        return (<ul className="note-bar">
            <li ><i className="fas fa-trash"></i></li>
            <li><i className="fas fa-thumbtack"></i></li>
            <li><i className="fas fa-palette"></i></li>
            <li><i className="fas fa-edit"></i></li>
            <li><i className="fas fa-check"></i></li>
        </ul >)
    }
}



