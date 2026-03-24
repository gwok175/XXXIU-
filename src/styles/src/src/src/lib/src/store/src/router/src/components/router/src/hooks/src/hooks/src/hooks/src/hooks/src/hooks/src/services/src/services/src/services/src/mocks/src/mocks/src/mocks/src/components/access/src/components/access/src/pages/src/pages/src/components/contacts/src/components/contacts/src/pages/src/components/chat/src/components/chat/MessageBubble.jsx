const MEDIA_TYPES = ['image', 'gif', 'video']

export default function MessageBubble({ message }) {
  const { sender_email, message_type, content, media_url, is_destroyed } = message

  if (is_destroyed) {
    return (
      <div className="self-start text-zinc-600 italic text-xs px-4 py-2 border border-zinc-800 rounded-2xl max-w-xs">
        [ mensagem destruída ]
      </div>
    )
  }

  if (message_type === 'system') {
    return (
      <div className="self-center text-zinc-500 text-xs text-center py-1 px-3 bg-zinc-900 rounded-full max-w-xs">
        {content}
      </div>
    )
  }

  const isMe = sender_email === 'user@void.net'
  const align = isMe ? 'self-end' : 'self-start'
  const bg = isMe ? 'bg-zinc-800' : 'bg-zinc-900'

  return (
    <div className={`${align} max-w-xs`}>
      {message_type === 'text' && (
        <div className={`${bg} text-white text-sm px-4 py-2 rounded-2xl break-words`}>
          {content}
        </div>
      )}

      {(message_type === 'image' || message_type === 'gif') && media_url && (
        <img
          src={media_url}
          alt={message_type}
          className="rounded-xl max-w-full opacity-90"
        />
      )}

      {message_type === 'video' && media_url && (
        <video
          src={media_url}
          controls
          className="rounded-xl max-w-full opacity-90"
        />
      )}

      {MEDIA_TYPES.includes(message_type) && !media_url && (
        <div className={`${bg} text-zinc-500 text-xs px-4 py-2 rounded-2xl italic`}>
          [ mídia indisponível ]
        </div>
      )}
    </div>
  )
}
