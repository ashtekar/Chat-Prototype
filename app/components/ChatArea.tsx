import MessageList from './MessageList'
import MessageBox from './MessageBox'

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col">
      <header className="bg-gray-800 p-4 text-xl font-semibold">
        All Things Biology
      </header>
      <div className="flex-1 overflow-y-auto">
        <MessageList />
      </div>
      <MessageBox />
    </div>
  )
}

