export default function CodeInput({ code, setCode, onSubmit, disabled }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
      <input
        type="password"
        value={code}
        onChange={e => setCode(e.target.value)}
        maxLength={6}
        disabled={disabled}
        className="bg-zinc-900 text-white text-center text-xl tracking-widest w-40 py-3 rounded outline-none border border-zinc-800 focus:border-zinc-600 transition disabled:opacity-30"
        autoFocus
      />
      <button
        type="submit"
        disabled={disabled}
        className="text-zinc-500 text-xs tracking-widest uppercase border border-zinc-800 px-6 py-2 rounded hover:border-zinc-600 hover:text-zinc-300 transition disabled:opacity-30"
      >
        entrar
      </button>
    </form>
  )
}
