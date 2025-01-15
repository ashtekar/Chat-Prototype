import Image from 'next/image'

interface MessageProps {
  sender: string
  content: string
  timestamp: string
  link?: string
  image?: string
}

export default function Message({ sender, content, timestamp, link, image }: MessageProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-1">
        <span className="font-semibold mr-2">{sender}</span>
        <span className="text-xs text-gray-400">{timestamp}</span>
      </div>
      <div className="bg-gray-800 rounded-lg p-3">
        {link ? (
          <a href={link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          <p>{content}</p>
        )}
        {image && (
          <div className="mt-2">
            <Image src={image || "/placeholder.svg"} alt="Message attachment" width={200} height={100} className="rounded-md" />
          </div>
        )}
      </div>
    </div>
  )
}

