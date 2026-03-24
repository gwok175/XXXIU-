import ContactCard from './ContactCard'

export default function ContactList({ contacts, onSelect }) {
  if (!contacts.length) {
    return (
      <p className="text-xs text-zinc-700 text-center mt-12 tracking-widest uppercase">
        nenhum contato
      </p>
    )
  }

  return (
    <ul className="flex flex-col">
      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} onSelect={onSelect} />
      ))}
    </ul>
  )
}
