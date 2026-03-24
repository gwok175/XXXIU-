export default function ContactCard({ contact, onSelect }) {
  const initial = contact.nickname?.[0]?.toUpperCase() ?? '?'

  return (
    <li
      onClick={() => onSelect(contact)}
      className="flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-zinc-900 transition border-b border-zinc-900"
    >
      <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 shrink-0 overflow-hidden">
        {contact.avatar_url
          ? <img src={contact.avatar_url} alt="" className="w-full h-full object-cover" />
          : initial}
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm text-zinc-200 truncate">
          {contact.nickname}
        </span>
        <span className="text-xs text-zinc-600 truncate">
          {contact.contact_email}
        </span>
      </div>

      <span className={`text-xs shrink-0 ${
        contact.status === 'online'
          ? 'text-emerald-800'
          : 'text-zinc-700'
      }`}>
        {contact.status === 'online' ? '●' : '○'}
      </span>
    </li>
  )
}
