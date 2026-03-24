import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccess } from '../hooks/useAccess'
import CodeInput from '../components/access/CodeInput'
import AccessFeedback from '../components/access/AccessFeedback'

export default function SecretAccess() {
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { loginWithCode } = useAccess()

  function handleSubmit(e) {
    e.preventDefault()
    if (loginWithCode(code)) {
      navigate('/splash')
    } else {
      setError('acesso negado')
      setCode('')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black gap-6">
      <p className="text-zinc-700 text-xs tracking-widest uppercase">
        código de acesso
      </p>

      <CodeInput
        code={code}
        setCode={(v) => {
          setCode(v)
          setError(null)
        }}
        onSubmit={handleSubmit}
      />

      <AccessFeedback error={error} />
    </div>
  )
}
