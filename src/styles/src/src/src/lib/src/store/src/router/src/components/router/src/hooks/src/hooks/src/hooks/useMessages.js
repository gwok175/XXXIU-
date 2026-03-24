import { useState } from 'react'
import { conversationService } from '../services/conversationService'
import { messageService } from '../services/messageService'

export function useMessages(contactId) {
  const conv = conversationService.getByContactId(contactId)
  const initial = conv ? messageService.getByConversationId(conv.id) : []

  const [messages, setMessages] = useState(initial)
  const [conversation, setConversation] = useState(conv)

  function sendMessage(content, type = 'text') {
    if (!content.trim()) return
    const msg = messageService.createLocal(conversation?.id ?? null, content, type)
    setMessages(prev => [...prev, msg])
  }

  return { messages, setMessages, conversation, setConversation, sendMessage }
}
