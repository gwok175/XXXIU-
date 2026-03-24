import { useNavigate } from 'react-router-dom'
import { useContacts } from '../hooks/useContacts'
import { useAccess } from '../hooks/useAccess'
import ContactList from '../components/contacts/ContactList'

export default function Contacts() {
  const navigate = useNavigate()
  const { contacts } = useContacts()
  const { logout } = useAccess()

  function handleLogout() {
    logout()
    navigate('/access')
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-900 shrink-0">
        <p className="text-xs text-zinc-600 tracking-widest uppercase">contatos</p>
        <button
          onClick={handleLogout}
          className="text-xs text-zinc-700 hover:text-zinc-500 tracking-widest uppercase transition"
        >
          sair
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <ContactList
          contacts={contacts}
          onSelect={(c) => navigate(`/chat/${c.id}`)}
        />
      </div>
    </div>
  )
}
