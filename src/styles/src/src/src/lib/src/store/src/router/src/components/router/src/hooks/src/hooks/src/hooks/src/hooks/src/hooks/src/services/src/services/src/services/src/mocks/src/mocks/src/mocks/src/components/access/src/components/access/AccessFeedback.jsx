export default function AccessFeedback({ error, success }) {
  if (!error && !success) return null

  return (
    <p className={`text-xs tracking-widest uppercase ${
      error ? 'text-red-800' : 'text-zinc-500'
    }`}>
      {error ?? success}
    </p>
  )
}
