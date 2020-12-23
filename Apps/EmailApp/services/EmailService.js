import { UtilService } from '../../../services/UtilService.js'
import { StorageService } from '../../../services/StorageService.js'

export const EmailService = {
    query,
    getEmailById,
    deleteEmail,
    updateIsRead,
    add,
    filterBy,
    sortBy

}


const EMAIL_KEY = 'emailsDB'
var gEmails;
_getEmails()

function _getEmails() {
    gEmails = StorageService.load(EMAIL_KEY)
    if (!gEmails || !gEmails.length) {
        gEmails = [{
            subject: 'Wassap?',
            body: 'Pick up!',
            from: 'Yonit',
            id: UtilService.makeId(),
            isRead: false,
            sentAt: 1551133930594
        },
        {
            subject: 'hey',
            body: 'have you seen my last edits on our project? wating for your reply',
            from: 'Nofar',
            id: UtilService.makeId(),
            isRead: false,
            sentAt: 155113400000
        },

        {
            subject: 'where are you???',
            body: 'youre late!',
            from: 'Dad',
            id: UtilService.makeId(),
            isRead: false,
            sentAt: 1551133950594
        },

        {
            subject: 'come home',
            body: 'i need you to come early today the internet is down and i need your help',
            from: 'Mom',
            id: UtilService.makeId(),
            isRead: false,
            sentAt: 1551133930594
        },

        {
            subject: 'hey?',
            body: 'pop that !',
            from: 'Michal',
            id: UtilService.makeId(),
            isRead: false,
            sentAt: 1551133931114
        },

        ]

        StorageService.save(EMAIL_KEY, gEmails)
    }

}

function query() {
    return Promise.resolve(gEmails)
}

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(emails)
}


function deleteEmail(emailId) {
    console.log('email deleted:', emailId);
    const idx = _getEmailIdxById(emailId)
    let copy = [...gEmails]
    copy.splice(idx, 1)
    gEmails = copy
    StorageService.save(EMAIL_KEY, gEmails)
}

function updateIsRead(emailId) {
    const idx = _getEmailIdxById(emailId)
    console.log(idx);
    let copyEmails = [...gEmails]
    copyEmails[idx].isRead = true
    gEmails = copyEmails
    StorageService.save(EMAIL_KEY, gEmails)

}

function add(email) {
    const newEmail = {
        subject: email.subject,
        body: email.body,
        from: email.from,
        id: UtilService.makeId(),
        isRead: false,
        sentAt: Date.now()
    }
    let copyEmails = [...gEmails]
    copyEmails = [newEmail, ...copyEmails]
    gEmails = copyEmails
    StorageService.save(EMAIL_KEY, gEmails)

    return Promise.resolve()
}

function filterBy(key) {

    const filterRegex = new RegExp(key, 'i');
    var emails = gEmails.filter(email => {
        return filterRegex.test(email.from) || filterRegex.test(email.body) || filterRegex.test(email.subject)
    })
    return Promise.resolve(emails)
}


function sortBy(value) {
    let emails;
    if (value === 'date') emails = _sortByDate()
    else if (value === 'unread') emails = _sortByRead()
    return Promise.resolve(emails)
}
function _sortByRead() {
    var emails = gEmails.sort((email1, email2) => {
        if (email1.isRead && !email2.isRead) return -1
        if (!email1.isRead && email2.isRead) return 1
        else return 0
    })
    return emails
}

function _sortByDate() {
    var emails = gEmails.sort((email1, email2) => {
        if (email1.sentAt > email2.sentAt) return -1
        if (email1.sentAt > email2.sentAt) return 1
        else return 0
    })
    return emails
}

function _getEmailIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)
}

