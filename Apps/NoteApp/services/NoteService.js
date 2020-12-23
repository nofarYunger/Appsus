import { UtilService } from '../../../services/UtilService.js'
import { StorageService } from '../../../services/StorageService.js'

export const NoteService = {
    query,
    save,
    remove
}
var gNotes;
const KEY = 'notesDB'
_createNotes()

function _createNotes() {
    gNotes = StorageService.load(KEY);
    if (!gNotes || !gNotes.length) {
        // Nothing in localStorage, use demo data
        gNotes = _getDemoNotes()
        _saveNotesToStorage();
    }
}
function save(note) {

    if (note.id) {
        return _update(note);
    } else {
        return _add(note);
    }
}

function _add(note) {
    const noteToAdd = {
        id: UtilService.makeId(),
        isPinned: false,
        ...note
    };

    gNotes = [noteToAdd, ...gNotes];
    _saveNotesToStorage();
    return Promise.resolve(noteToAdd);
}

function _update(note) {
    const noteToUpdate = {
        ...note
    };
    const notesCopy = [...gnotes];
    const noteIdx = notesCopy.findIndex(note => note.id === note.id);
    notesCopy[noteIdx] = noteToUpdate;
    gNotes = notesCopy;
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate);
}
function _saveNotesToStorage() { StorageService.save(KEY, gNotes) }

function remove(noteId) {
    gNotes = gnotes.filter(note => note.id !== noteId);
    _saveNotesToStorage();
    return Promise.resolve();
}

// function getById(noteId) {
//     const note = gnotes.find(note => note.id === noteId);
//     return Promise.resolve(note);
// }
function query() {
    return Promise.resolve(gNotes)
}

function _getDemoNotes() {
    const notes = [
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
                    { id: UtilService.makeId(), txt: "Do that", doneAt: null },
                    { id: UtilService.makeId(), txt: "Do this", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#00d"
            }
        }

    ];
    return notes
}
