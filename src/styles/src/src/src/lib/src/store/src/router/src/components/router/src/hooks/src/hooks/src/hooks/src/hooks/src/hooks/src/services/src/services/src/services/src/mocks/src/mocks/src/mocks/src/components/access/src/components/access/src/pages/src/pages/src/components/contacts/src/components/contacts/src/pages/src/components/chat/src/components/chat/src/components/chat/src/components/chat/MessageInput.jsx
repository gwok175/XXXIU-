export default function MessageInput({ input, setInput, onSend, onDestroy, disabled }) {
  function handleSubmit(e) {
    e.preventDefault()
    if (!disabled) onSend()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 px-4 py-4 border-t border-zinc-800 bg-black shrink-0"
    >
      <button
        type="button"
        disabled={disabled}
        className="text-zinc-600 text-lg px-1 hover:text-zinc-400 transition disabled:opacity-20 disabled:cursor-not-allowed"
        title="mídia (em breve)"
      >
        ⊕
      </button>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        className="flex-1 bg-zinc-900 text-sm text-white rounded-full px-4 py-2 outline-none border border-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed"
        placeholder={disabled ? 'conversa destruída' : 'mensagem'}
      />

      <button
        type="submit"
        disabled={disabled}
        className="text-zinc-400 border border-zinc-700 px-4 py-2 rounded-full text-sm hover:border-zinc-400 transition disabled:opacity-20 disabled:cursor-not-allowed"
      >
        →
      </button>

      <button
        type="button"
        onClick={onDestroy}
        disabled={disabled}
        className="text-red-900 border border-red-900 px-3 py-2 rounded-full text-xs hover:border-red-600 hover:text-red-500 transition disabled:opacity-20 disabled:cursor-not-allowed"
        title="destruir conversa"
      >
        ✕
      </button>
    </form>
  )
}
