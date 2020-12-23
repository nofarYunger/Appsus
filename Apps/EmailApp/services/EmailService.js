import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storageService.js'

// export const EmailService {

// }


var gEmails;


function getEmails() {

    gEmails = [{ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { subject: 'hey?', body: 'Pick up!', from: 'Yonit', id: utilService.makeId(), isRead: false, sentAt: 1551133930594 },
    { subject: 'mama?', body: 'youre late!', from: 'Yonit', id: utilService.makeId(), isRead: false, sentAt: 1551133930594 },
    { subject: 'hey?', body: 'mama papa !', from: 'Yonit', id: utilService.makeId(), isRead: false, sentAt: 1551133930594 },
    { subject: 'hey?', body: 'pop that !', from: 'Yonit', id: utilService.makeId(), isRead: false, sentAt: 1551133930594 },
    ]

}