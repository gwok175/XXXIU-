import { messagesMock } from '../mocks/messages.mock'

export const messageService = {
  getByConversationId: (conversationId) =>
    messagesMock.filter(m => m.conversation_id === conversationId),

  createLocal: (conversationId, content, type = 'text') => ({
    id: `msg-${Date.now()}`,
    conversation_id: conversationId,
    sender_email: 'user@void.net',
    sender_nickname: 'Eu',
    content,
    message_type: type,
    media_url: null,
    is_read: false,
    is_destroyed: false,
    created_at: new Date().toISOString(),
  }),

  destroyAll: (messages) =>
    messages.map(m => ({ ...m, is_destroyed: true })),
}
