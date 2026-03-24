export function useNarrative(messages = [], baseText = null) {
  const active = messages.filter(m => !m.is_destroyed && m.message_type !== 'system')
  const textMsgs = active.filter(m => m.message_type === 'text')
  const mediaMsgs = active.filter(m => ['image', 'gif', 'video'].includes(m.message_type))

  const narrativeScore = textMsgs.length * 10 + mediaMsgs.length * 20

  const narrativeText = baseText ?? (
    active.length === 0
      ? 'Sem atividade registrada.'
      : `${textMsgs.length} msg${textMsgs.length !== 1 ? 's' : ''} · ${mediaMsgs.length} mídia${mediaMsgs.length !== 1 ? 's' : ''} transmitida${mediaMsgs.length !== 1 ? 's' : ''}.`
  )

  const hasNarrative = active.length > 0

  return { narrativeText, narrativeScore, hasNarrative }
}
