import { contactsMock } from '../mocks/contacts.mock'

export const contactService = {
  getAll: () => contactsMock,

  getById: (id) => contactsMock.find(c => c.id === id) ?? null,

  getDisplayName: (contact) => contact?.nickname || contact?.contact_email || '—',

  getStatusLabel: (contact) => {
    if (!contact) return ''
    return contact.status === 'online' ? 'online' : 'offline'
  },
}
