import { useState } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import { FiEdit, FiCalendar } from 'react-icons/fi'

function WellnessJournal() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2023-11-01',
      title: 'Finding Peace',
      content: 'Today I practiced mindfulness for 20 minutes and felt a sense of calm afterward.',
      tags: ['mindfulness', 'calm']
    },
    {
      id: 2,
      date: '2023-11-03',
      title: 'Morning Reflection',
      content: 'Woke up early and spent time journaling about my goals and intentions.',
      tags: ['goals', 'morning-routine']
    }
  ])
  
  const [isAddingEntry, setIsAddingEntry] = useState(false)
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    tags: ''
  })
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewEntry({ ...newEntry, [name]: value })
  }
  
  const handleAddEntry = () => {
    if (newEntry.title.trim() === '' || newEntry.content.trim() === '') {
      return
    }
    
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    
    const tagsArray = newEntry.tags
      ? newEntry.tags.split(',').map(tag => tag.trim().toLowerCase())
      : []
    
    const entryToAdd = {
      id: entries.length + 1,
      date: formattedDate,
      title: newEntry.title,
      content: newEntry.content,
      tags: tagsArray
    }
    
    setEntries([entryToAdd, ...entries])
    setNewEntry({ title: '', content: '', tags: '' })
    setIsAddingEntry(false)
  }
  
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  return (
    <Card 
      title="Wellness Journal" 
      headerRight={
        <Button
          variant="outline-primary"
          size="sm"
          icon={<FiEdit />}
          onClick={() => setIsAddingEntry(!isAddingEntry)}
        >
          {isAddingEntry ? 'Cancel' : 'Add Entry'}
        </Button>
      }
    >
      <div className="min-h-[200px]">
        {isAddingEntry ? (
          <div className="animate-fade-in">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newEntry.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Give your entry a title"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1">
                Journal Entry
              </label>
              <textarea
                id="content"
                name="content"
                value={newEntry.content}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label htmlFor="tags" className="block text-sm font-medium text-slate-700 mb-1">
                Tags (comma separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={newEntry.tags}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., gratitude, mindfulness, goals"
              />
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handleAddEntry}>
                Save Entry
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {entries.length > 0 ? (
              <div className="space-y-4">
                {entries.slice(0, 2).map((entry) => (
                  <div key={entry.id} className="p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition duration-150">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{entry.title}</h4>
                      <div className="flex items-center text-sm text-slate-500">
                        <FiCalendar className="mr-1 h-3 w-3" />
                        <span>{formatDate(entry.date)}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-2 line-clamp-2">
                      {entry.content}
                    </p>
                    {entry.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {entry.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {entries.length > 2 && (
                  <div className="text-center">
                    <Button variant="ghost" size="sm">
                      View All Entries ({entries.length})
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <p>Your journal is empty. Add your first entry to start tracking your wellness journey.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

export default WellnessJournal