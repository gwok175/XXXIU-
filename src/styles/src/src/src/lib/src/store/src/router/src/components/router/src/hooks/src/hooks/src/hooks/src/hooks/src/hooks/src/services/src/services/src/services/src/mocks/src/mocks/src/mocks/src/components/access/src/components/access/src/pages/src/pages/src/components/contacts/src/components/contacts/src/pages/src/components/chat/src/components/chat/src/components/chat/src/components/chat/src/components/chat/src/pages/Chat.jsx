import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContacts } from '../hooks/useContacts'
import { useMessages } from '../hooks/useMessages'
import { useNarrative } from '../hooks/useNarrative'
import { useDestruction } from '../hooks/useDestruction'
import ChatHeader from '../components/chat/ChatHeader'
import MessageList from '../components/chat/MessageList'
import MessageInput from '../components/chat/MessageInput'
import NarrativePanel from '../components/chat/NarrativePanel'

export default function Chat() {
  const { contactId } = useParams()
  const [input, setInput] = useState('')

  const { getContactById } = useContacts()
  const contact = getContactById(contactId)
  const { messages, setMessages, conversation, setConversation, sendMessage } = useMessages(contactId)
  const { narrativeText, narrativeScore } = useNarrative(messages, conversation?.narrative_text)
  const { destroyMessages } = useDestruction(messages, setMessages, conversation, setConversation)

  const isDestroyed = conversation?.is_destroyed ?? false

  function handleSend() {
    if (!input.trim() || isDestroyed) return
    sendMessage(input)
    setInput('')
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden">
      <div className="flex flex-col flex-1 min-h-0 min-w-0">
        <ChatHeader contact={contact} narrativeScore={narrativeScore} />
        <MessageList messages={messages} />
        <MessageInput
          input={input}
          setInput={setInput}
          onSend={handleSend}
          onDestroy={destroyMessages}
          disabled={isDestroyed}
        />
      </div>

      <NarrativePanel
        narrativeText={narrativeText}
        narrativeScore={narrativeScore}
        isDestroyed={isDestroyed}
      />
    </div>
  )
}
