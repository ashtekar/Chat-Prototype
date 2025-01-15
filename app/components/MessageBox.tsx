'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function MessageBox() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 border-t border-gray-700 p-4">
      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow bg-gray-700 text-white rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}

