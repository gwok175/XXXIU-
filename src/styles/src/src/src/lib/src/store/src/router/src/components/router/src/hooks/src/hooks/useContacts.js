import { contactService } from '../services/contactService'

export function useContacts() {
  return {
    contacts: contactService.getAll(),
    getContactById: contactService.getById,
  }
}
