export default function NarrativePanel({ narrativeText, narrativeScore, isDestroyed }) {
  return (
    <div
      className={[
        'shrink-0 bg-zinc-950 border-zinc-800 flex items-center justify-between transition-opacity',
        'border-b px-4 py-3',
        'md:border-b-0 md:border-l md:w-60 md:flex-col md:items-start md:justify-start md:gap-3 md:py-8 md:px-5',
        isDestroyed ? 'opacity-30' : 'opacity-100',
      ].join(' ')}
    >
      <p className="text-xs text-zinc-500 italic leading-relaxed md:leading-loose">
        {narrativeText ?? 'Sem narrativa registrada.'}
      </p>

      <span className="text-xs text-zinc-700 font-mono shrink-0 md:mt-auto">
        {narrativeScore ?? 0}pts
      </span>
    </div>
  )
}
