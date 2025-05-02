import { useState } from 'react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { FiPlus, FiSearch, FiCalendar, FiFilter, FiTag, FiBook } from 'react-icons/fi'

function Journal() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2023-11-01',
      title: 'Finding Peace',
      content: 'Today I practiced mindfulness for 20 minutes and felt a sense of calm afterward. I noticed how my thoughts tend to race in the morning, but after meditation, everything felt clearer and more manageable. I want to make this a daily practice.',
      tags: ['mindfulness', 'calm']
    },
    {
      id: 2,
      date: '2023-11-03',
      title: 'Morning Reflection',
      content: 'Woke up early and spent time journaling about my goals and intentions. I realized I need to be more patient with myself and celebrate small victories. Setting achievable daily goals seems to help me feel more accomplished.',
      tags: ['goals', 'morning-routine']
    },
    {
      id: 3,
      date: '2023-11-05',
      title: 'Overcoming Anxiety',
      content: 'Had a challenging meeting at work today. Felt anxiety building up beforehand, but used breathing techniques to stay centered. I managed to express my ideas clearly despite the nervousness. Proud of how I handled it.',
      tags: ['anxiety', 'work', 'breathing']
    },
    {
      id: 4,
      date: '2023-11-08',
      title: 'Gratitude Practice',
      content: 'Started listing three things I&#39;m grateful for each day. Today I&#39;m grateful for: 1) My morning coffee 2) The supportive message from my friend 3) The beautiful sunset I saw while walking home. This practice is shifting my focus to positive aspects.',
      tags: ['gratitude', 'positivity']
    }
  ])
  
  const [isAddingEntry, setIsAddingEntry] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeEntry, setActiveEntry] = useState(null)
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const filteredEntries = entries.filter(entry => {
    if (searchTerm === '') return true
    
    const searchLower = searchTerm.toLowerCase()
    return (
      entry.title.toLowerCase().includes(searchLower) ||
      entry.content.toLowerCase().includes(searchLower) ||
      entry.tags.some(tag => tag.includes(searchLower))
    )
  })
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Wellness Journal</h1>
          <p className="text-slate-500">
            Record your thoughts, feelings, and reflections on your wellness journey.
          </p>
        </div>
        <Button icon={<FiPlus />} onClick={() => setIsAddingEntry(true)}>
          New Entry
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="text-slate-400" />
          </div>
          <input
            type="search"
            className="block w-full p-3 pl-10 text-sm border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Search entries by title, content, or tags..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-xl shadow-card p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Journal Entries</h2>
              <button className="text-slate-500 hover:text-primary-500">
                <FiFilter />
              </button>
            </div>
            
            {filteredEntries.length > 0 ? (
              <div className="space-y-3">
                {filteredEntries.map((entry) => (
                  <div 
                    key={entry.id}
                    className={`
                      p-3 rounded-lg border cursor-pointer transition-all
                      ${activeEntry?.id === entry.id
                        ? 'border-primary-400 bg-primary-50'
                        : 'border-slate-200 hover:border-primary-200 hover:bg-slate-50'}
                    `}
                    onClick={() => setActiveEntry(entry)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{entry.title}</h3>
                    </div>
                    <div className="flex items-center text-xs text-slate-500 mb-2">
                      <FiCalendar className="mr-1 h-3 w-3" />
                      <span>{formatDate(entry.date)}</span>
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-2 mb-2">
                      {entry.content}
                    </p>
                    {entry.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {entry.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                          >
                            <FiTag className="mr-1 h-2.5 w-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <p>No entries found matching your search.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="w-full lg:w-2/3">
          {isAddingEntry ? (
            <Card title="New Journal Entry">
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
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
                  rows={12}
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
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., gratitude, mindfulness, goals"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button 
                  variant="outline" 
                  onClick={() => setIsAddingEntry(false)}
                >
                  Cancel
                </Button>
                <Button>
                  Save Entry
                </Button>
              </div>
            </Card>
          ) : activeEntry ? (
            <Card 
              title={activeEntry.title}
              headerRight={
                <div className="text-sm text-slate-500">
                  {formatDate(activeEntry.date)}
                </div>
              }
            >
              <div className="prose prose-slate max-w-none mb-6">
                <p className="whitespace-pre-line">{activeEntry.content}</p>
              </div>
              
              {activeEntry.tags.length > 0 && (
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <FiTag className="mr-2" />
                    <span>Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeEntry.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-end space-x-3 mt-6">
                <Button variant="outline">
                  Edit
                </Button>
                <Button variant="primary">
                  Add to Favorites
                </Button>
              </div>
            </Card>
          ) : (
            <div className="bg-white rounded-xl shadow-card p-8 text-center">
              <div className="mb-4">
                <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <FiBook className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-2">Select an Entry</h3>
              <p className="text-slate-500 mb-6">
                Choose an entry from the left or create a new one to view its content here.
              </p>
              <Button 
                variant="outline"
                icon={<FiPlus />}
                onClick={() => setIsAddingEntry(true)}
              >
                Create New Entry
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Journal