import { conversationsMock } from '../mocks/conversations.mock'

function generateNarrative(messages = []) {
  const texts = messages
    .filter(m => m.message_type === 'text' && !m.is_destroyed && m.sender_email !== 'system')
    .map(m => m.content)
    .filter(Boolean)

  if (!texts.length) return 'Sem atividade registrada.'
  return texts.slice(-2).join(' / ')
}

function computeScore(messages = []) {
  const active = messages.filter(m => !m.is_destroyed && m.message_type !== 'system')
  const texts = active.filter(m => m.message_type === 'text').length
  const media = active.filter(m => ['image', 'gif', 'video'].includes(m.message_type)).length
  return texts * 10 + media * 20
}

export const conversationService = {
  getByContactId: (contactId) =>
    conversationsMock.find(c => c.contactId === contactId) ?? null,

  updateDestroyed: (conversation) => ({
    ...conversation,
    is_destroyed: true,
  }),

  updateNarrative: (conversation, messages) => ({
    ...conversation,
    narrative_text: generateNarrative(messages),
    narrative_score: computeScore(messages),
  }),
}
