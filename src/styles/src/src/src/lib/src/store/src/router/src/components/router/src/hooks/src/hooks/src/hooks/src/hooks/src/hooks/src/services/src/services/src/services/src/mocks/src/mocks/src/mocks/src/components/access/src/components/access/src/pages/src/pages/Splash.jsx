import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sessionStore } from '../store/sessionStore'

export default function Splash() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 200)
    const go = setTimeout(() => {
      navigate(sessionStore.isAuthenticated() ? '/contacts' : '/access')
    }, 2200)

    return () => {
      clearTimeout(show)
      clearTimeout(go)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black gap-4">
      <div className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'} flex flex-col items-center gap-3`}>
        <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-zinc-600" />
        </div>
        <span className="text-zinc-700 text-xs tracking-[0.4em] uppercase">
          protocolo ativo
        </span>
      </div>
    </div>
  )
}
