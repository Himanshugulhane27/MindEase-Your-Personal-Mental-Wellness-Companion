import { useState } from 'react'
import Card from '../common/Card'
import { FiBookmark, FiRefreshCw } from 'react-icons/fi'
import Button from '../common/Button'

// Mock affirmations - in a real app, these would come from an API
const affirmations = [
  "I am capable of amazing things.",
  "I embrace challenges as opportunities for growth.",
  "I am worthy of love and respect.",
  "My potential is limitless.",
  "I choose to be at peace.",
  "I am enough exactly as I am.",
  "I trust in my ability to make good decisions.",
  "I am grateful for all that I have.",
  "Today I am choosing happiness.",
  "My thoughts and feelings matter.",
  "I am creating a life that feels good.",
  "I release all negative energy from my body.",
  "I am strong, confident, and capable.",
  "I am in charge of how I feel today.",
  "I believe in myself and my abilities."
]

function DailyAffirmation() {
  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0])
  const [isSaved, setIsSaved] = useState(false)
  const [savedAffirmations, setSavedAffirmations] = useState([])
  const [showSaved, setShowSaved] = useState(false)
  
  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length)
    setCurrentAffirmation(affirmations[randomIndex])
    setIsSaved(savedAffirmations.includes(affirmations[randomIndex]))
  }
  
  const toggleSaveAffirmation = () => {
    if (isSaved) {
      setSavedAffirmations(savedAffirmations.filter(a => a !== currentAffirmation))
      setIsSaved(false)
    } else {
      setSavedAffirmations([...savedAffirmations, currentAffirmation])
      setIsSaved(true)
    }
  }
  
  return (
    <Card 
      title="Daily Affirmation" 
      headerRight={
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            icon={<FiRefreshCw />} 
            onClick={getRandomAffirmation}
          />
          <Button 
            variant="ghost" 
            size="sm" 
            className={isSaved ? 'text-accent-500' : ''} 
            icon={<FiBookmark className={isSaved ? 'fill-accent-500' : ''} />} 
            onClick={toggleSaveAffirmation}
          />
        </div>
      }
    >
      <div className="min-h-[200px]">
        {!showSaved ? (
          <div className="animate-fade-in">
            <div className="text-center py-6">
              <p className="text-xl text-slate-700 italic mb-4">
                "{currentAffirmation}"
              </p>
              <div className="h-0.5 w-16 bg-primary-200 mx-auto my-6"></div>
              <p className="text-slate-500 text-sm">
                Take a moment to absorb this affirmation.
              </p>
            </div>
            
            <div className="mt-4 flex justify-between">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setShowSaved(true)}
              >
                View Saved
                {savedAffirmations.length > 0 && (
                  <span className="ml-2 bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded-full text-xs">
                    {savedAffirmations.length}
                  </span>
                )}
              </Button>
              <Button 
                size="sm" 
                variant="accent" 
                onClick={getRandomAffirmation}
              >
                New Affirmation
              </Button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <h4 className="font-medium mb-3">Saved Affirmations</h4>
            
            {savedAffirmations.length > 0 ? (
              <ul className="space-y-3 max-h-[200px] overflow-y-auto mb-4">
                {savedAffirmations.map((affirmation, index) => (
                  <li 
                    key={index} 
                    className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-700"
                  >
                    {affirmation}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center py-6 text-slate-500">
                You haven't saved any affirmations yet.
              </p>
            )}
            
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => setShowSaved(false)}
              fullWidth
            >
              Back to Today's Affirmation
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}

export default DailyAffirmation