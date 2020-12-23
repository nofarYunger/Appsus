import { UtilService } from '../../../services/UtilService.js'
import { StorageService } from '../../../services/StorageService.js'

export const EmailService = {
    query,
    getEmailById

}


const EMAIL_KEY = 'emailsDB'
var gEmails;
_getEmails()

function _getEmails() {
    gEmails = StorageService.load(EMAIL_KEY)
    if (!gEmails) {
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
    var email = gEmails.find(email => email.id = emailId)
    return Promise.resolve(emails)
}
