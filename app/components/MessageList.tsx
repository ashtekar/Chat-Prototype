import Message from './Message'

const messages = [
  {
    id: 1,
    sender: 'Ashish Ashtekar',
    content: 'Peptide-Guided Nanoparticles Deliver mRNA to Neurons',
    link: 'https://www.genengnews.com/topics/drug-discovery/peptide-guided-nanoparticles-deliver-mrna-to-neurons/',
    timestamp: 'Dec 18, 4:47 PM',
    image: '/placeholder.svg?height=100&width=200',
  },
  {
    id: 2,
    sender: 'Anjali Ashtekar',
    content: 'Interesting article.',
    timestamp: 'Dec 18, 5:02 PM',
  },
  {
    id: 3,
    sender: 'Ashish Ashtekar',
    content: 'Building Life With Generative AI',
    link: 'https://www.forbes.com/sites/robtoews/2023/12/28/building-life-with-generative-ai/',
    timestamp: 'Dec 29, 11:24 AM',
    image: '/placeholder.svg?height=100&width=200',
  },
  {
    id: 4,
    sender: 'Ashish Ashtekar',
    content: 'Engineering covalent small molecule–RNA conjugates',
    link: 'https://www.nature.com/articles/s41586-023-06828-5',
    timestamp: 'Jan 6, 9:21 PM',
    image: '/placeholder.svg?height=100&width=200',
  },
]

export default function MessageList() {
  return (
    <div className="flex-1 p-4 space-y-4">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  )
}

