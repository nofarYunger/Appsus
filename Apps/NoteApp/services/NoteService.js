import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storageService.js'

// export const NoteService {

// }


var gNotes;

function _getNotes() {
    gNotes = [
        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: true,

            info: {
                txt: "Fullstack Me Baby!"

            }
        },
        {
            id: utilService.makeId(),
            type: "NoteImg",
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        }
    ];
}