import { messageService } from '../services/messageService'
import { conversationService } from '../services/conversationService'

export function useDestruction(messages, setMessages, conversation, setConversation) {
  function destroyMessages() {
    const destroyed = messageService.destroyAll(messages)
    setMessages(destroyed)

    if (conversation) {
      const updated = conversationService.updateDestroyed(
        conversationService.updateNarrative(conversation, messages)
      )
      setConversation(updated)
    }
  }

  return { destroyMessages }
}
