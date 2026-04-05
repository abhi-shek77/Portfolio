import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const COMMANDS = {
  help: `Available commands:\n  whoami    — who is Abhishek?\n  skills    — list key skills\n  education — academic background\n  clear     — clear terminal`,
  whoami: `Abhishek Dhiman\nFull Stack Web Developer\nHimachal Pradesh, India\nBuilding: clean, performant, memorable web.`,
  skills: `Frontend → React, HTML, CSS, JS, Tailwind\nBackend  → Node.js, Express, Python, C\nDatabase → PostgreSQL\nTools    → Git, GitHub, Vite`,
  education: `MCA — Himachal Pradesh University\nBCA — Gautam College Hamirpur, H.P.`,
  clear: '__CLEAR__',
}

const PROMPT = 'abhishek@portfolio:~$'

export default function Terminal() {
  const [lines, setLines]   = useState([{ type: 'output', text: 'Type "help" to begin.' }])
  const [input, setInput]   = useState('')
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const handleKey = (e) => {
    if (e.key !== 'Enter') return
    const cmd = input.trim().toLowerCase()
    if (!cmd) return

    const response = COMMANDS[cmd]

    if (response === '__CLEAR__') {
      setLines([])
      setInput('')
      return
    }

    setLines(prev => [
      ...prev,
      { type: 'input', text: cmd },
      {
        type: 'output',
        text: response ?? `Command not found: "${cmd}". Try "help".`,
      },
    ])
    setInput('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="glass font-mono text-base rounded-lg overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="w-3 h-3 rounded-full bg-red-500/60"/>
        <span className="w-3 h-3 rounded-full bg-yellow-400/60"/>
        <span className="w-3 h-3 rounded-full bg-green-500/60"/>
        <span className="ml-3 text-muted text-xs tracking-widest">terminal</span>
      </div>

      {/* Output area */}
      <div className="p-4 h-52 overflow-y-auto space-y-1.5 text-xs leading-relaxed">
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === 'input' ? (
              <p>
                <span className="text-violet-bright mr-2">{PROMPT}</span>
                <span className="text-ghost">{line.text}</span>
              </p>
            ) : (
              <pre className="text-muted whitespace-pre-wrap">{line.text}</pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-white/[0.06]">
        <span className="text-violet-bright text-xs shrink-0">{PROMPT}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          className="flex-1 bg-transparent outline-none text-ghost text-xs caret-violet-bright"
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </motion.div>
  )
}
