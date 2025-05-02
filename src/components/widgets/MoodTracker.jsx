import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import Card from '../common/Card'
import Button from '../common/Button'
import { FiSmile, FiMeh, FiFrown } from 'react-icons/fi'

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const moodOptions = [
  { value: 1, icon: <FiFrown className="w-6 h-6" />, label: 'Poor', color: 'text-danger-500' },
  { value: 2, icon: <FiFrown className="w-6 h-6" />, label: 'Not Great', color: 'text-warning-500' },
  { value: 3, icon: <FiMeh className="w-6 h-6" />, label: 'Okay', color: 'text-accent-500' },
  { value: 4, icon: <FiSmile className="w-6 h-6" />, label: 'Good', color: 'text-primary-500' },
  { value: 5, icon: <FiSmile className="w-6 h-6" />, label: 'Great', color: 'text-success-500' }
]

function MoodTracker() {
  const [mood, setMood] = useState(null)
  const [moodHistory, setMoodHistory] = useState([])
  const [showForm, setShowForm] = useState(false)
  
  // Mock data - in a real app, this would come from an API or local storage
  useEffect(() => {
    const mockData = [
      { date: '2/1', value: 3 },
      { date: '2/2', value: 4 },
      { date: '2/3', value: 2 },
      { date: '2/4', value: 3 },
      { date: '2/5', value: 4 },
      { date: '2/6', value: 5 },
      { date: '2/7', value: 4 },
    ]
    setMoodHistory(mockData)
  }, [])
  
  const handleMoodSelect = (value) => {
    setMood(value)
  }
  
  const handleSaveMood = () => {
    if (mood) {
      const today = new Date()
      const dateStr = `${today.getMonth() + 1}/${today.getDate()}`
      const newMoodEntry = { date: dateStr, value: mood }
      
      setMoodHistory([...moodHistory, newMoodEntry])
      setMood(null)
      setShowForm(false)
    }
  }
  
  const chartData = {
    labels: moodHistory.map(entry => entry.date),
    datasets: [
      {
        label: 'Mood',
        data: moodHistory.map(entry => entry.value),
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  }
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.raw
            const moodLabel = moodOptions.find(m => m.value === value)?.label || ''
            return `Mood: ${moodLabel} (${value})`
          }
        }
      }
    },
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return moodOptions.find(m => m.value === value)?.label || value
          }
        }
      }
    },
    maintainAspectRatio: false,
  }
  
  return (
    <Card 
      title="Mood Tracker" 
      headerRight={
        <Button 
          variant="outline-primary" 
          size="sm" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Log Mood'}
        </Button>
      }
    >
      {showForm ? (
        <div className="animate-fade-in">
          <h4 className="text-center mb-4 text-lg font-medium">How are you feeling today?</h4>
          <div className="flex justify-center space-x-4 mb-6">
            {moodOptions.map((option) => (
              <button
                key={option.value}
                className={`
                  flex flex-col items-center p-3 rounded-lg transition-all
                  ${mood === option.value 
                    ? 'bg-primary-50 border-2 border-primary-300' 
                    : 'border border-slate-200 hover:bg-slate-50'}
                `}
                onClick={() => handleMoodSelect(option.value)}
              >
                <span className={option.color}>{option.icon}</span>
                <span className="mt-1 text-sm">{option.label}</span>
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <Button 
              onClick={handleSaveMood} 
              disabled={!mood}
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {moodHistory.length > 0 ? (
            <div className="h-64">
              <Line data={chartData} options={chartOptions} />
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <p>No mood data yet. Start tracking to see your patterns.</p>
            </div>
          )}
          
          <div className="mt-4">
            <h4 className="font-medium mb-2">Today's Mood</h4>
            {moodHistory.length > 0 ? (
              <div className="flex items-center">
                <span className="mr-2">
                  {moodOptions[moodHistory[moodHistory.length - 1].value - 1].icon}
                </span>
                <span className="font-medium">
                  {moodOptions[moodHistory[moodHistory.length - 1].value - 1].label}
                </span>
              </div>
            ) : (
              <p className="text-slate-500">Not recorded yet</p>
            )}
          </div>
        </div>
      )}
    </Card>
  )
}

export default MoodTracker