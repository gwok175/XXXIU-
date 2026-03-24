import { useNavigate } from 'react-router-dom'

export default function ChatHeader({ contact, narrativeScore }) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-800 bg-black shrink-0">
      <button
        onClick={() => navigate('/contacts')}
        className="text-zinc-500 text-sm pr-2 hover:text-zinc-300 transition"
      >
        ←
      </button>

      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-sm tracking-wide text-white truncate">
          {contact?.nickname ?? '—'}
        </p>
        <p className="text-xs text-zinc-600">
          {contact?.status ?? ''}
        </p>
      </div>

      <span className="text-xs text-zinc-600 font-mono shrink-0">
        {narrativeScore ?? 0}pts
      </span>
    </div>
  )
}
