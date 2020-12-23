import { UtilService } from '../../../services/UtilService.js'
import { StorageService } from '../../../services/StorageService.js'

export const NoteService = {
    query
}

const KEY = 'notesDB'

function query() {
    const storageNotes = StorageService.load(KEY);
    if (storageNotes) {
        return Promise.resolve(storageNotes);
    }
    _getNotes()
    StorageService.save(KEY, gNotes)
    return Promise.resolve(gNotes)
}
var gNotes;

function _getNotes() {
    gNotes = [
        {
            id: UtilService.makeId(),
            type: "NoteText",
            isPinned: true,

            info: {
                txt: "Fullstack Me Baby!"

            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: UtilService.makeId(),
            type: "NoteImg",
            info: {
                url: "https://s1.kikar.co.il/th/data/auto/nadm/tu/hmekxrx5__w643h448q95.jpg",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: UtilService.makeId(),
            type: "NoteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#00d"
            }
        }

    ];

}