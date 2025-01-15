'use client'

import { useState } from 'react'
import { Home, Book, Users, ChevronDown, ChevronRight, Puzzle } from 'lucide-react'

const chatSpaces = [
  { name: 'All Things Biology', icon: Book },
  { name: 'College Prep', icon: Users },
  { name: 'Stratford Prep', icon: Home },
]

const apps = [
  { name: 'Google Drive', icon: Puzzle },
  { name: 'Polling', icon: Puzzle },
  { name: 'Asana', icon: Puzzle },
]

export default function Sidebar() {
  const [isChatSpacesExpanded, setIsChatSpacesExpanded] = useState(true)
  const [isAppsExpanded, setIsAppsExpanded] = useState(true)

  return (
    <div className="w-64 bg-gray-800 flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <button
            onClick={() => setIsChatSpacesExpanded(!isChatSpacesExpanded)}
            className="flex items-center justify-between w-full text-xl font-semibold mb-4 hover:text-gray-300"
          >
            Chat Spaces
            {isChatSpacesExpanded ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          {isChatSpacesExpanded && (
            <ul className="mb-6">
              {chatSpaces.map((space, index) => (
                <li key={index} className={`mb-2 p-2 rounded ${index === 0 ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white">
                    <space.icon className="mr-2 h-5 w-5" />
                    {space.name}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setIsAppsExpanded(!isAppsExpanded)}
            className="flex items-center justify-between w-full text-xl font-semibold mb-4 hover:text-gray-300"
          >
            Apps
            {isAppsExpanded ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          {isAppsExpanded && (
            <ul>
              {apps.map((app, index) => (
                <li key={index} className="mb-2 p-2 rounded hover:bg-gray-700">
                  <a href="#" className="flex items-center text-gray-300 hover:text-white">
                    <app.icon className="mr-2 h-5 w-5" />
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-600 mr-3"></div>
          <div>
            <div className="font-semibold">Ashish Ashtekar</div>
            <div className="text-sm text-gray-400">ashtekar@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

