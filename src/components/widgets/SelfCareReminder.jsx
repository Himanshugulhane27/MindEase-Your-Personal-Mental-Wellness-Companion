import { useState } from 'react'
import { FiBell, FiX, FiClock } from 'react-icons/fi'
import Button from '../common/Button'

function SelfCareReminder() {
  const [isVisible, setIsVisible] = useState(true)
  const [reminderSet, setReminderSet] = useState(false)
  const [showTimeSelect, setShowTimeSelect] = useState(false)
  const [selectedTime, setSelectedTime] = useState('14:00')
  
  if (!isVisible) return null
  
  const handleSetReminder = () => {
    setReminderSet(true)
    setShowTimeSelect(false)
    // In a real app, this would integrate with a notification system
  }
  
  const formatTime = (timeString) => {
    return new Date(`2000/01/01 ${timeString}`).toLocaleTimeString([], { 
      hour: 'numeric', 
      minute: '2-digit' 
    })
  }
  
  return (
    <div className="bg-secondary-50 border border-secondary-100 rounded-xl p-4 shadow-sm animate-fade-in backdrop-blur-sm bg-opacity-80">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className="bg-secondary-100 rounded-full p-2 mr-3">
            <FiBell className="h-5 w-5 text-secondary-600" />
          </div>
          <div>
            <h3 className="font-medium text-secondary-900">Self-Care Reminder</h3>
            <p className="text-sm text-secondary-700">
              {reminderSet 
                ? `You'll receive a daily reminder at ${formatTime(selectedTime)}.`
                : "Set a daily reminder to take a moment for yourself."}
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-secondary-400 hover:text-secondary-600 transition-colors"
        >
          <FiX className="h-5 w-5" />
        </button>
      </div>
      
      {showTimeSelect && !reminderSet && (
        <div className="mt-4 p-3 bg-white rounded-lg border border-secondary-100 animate-fade-in">
          <div className="flex items-center mb-3">
            <FiClock className="text-secondary-500 mr-2" />
            <span className="text-sm font-medium text-secondary-900">Select Reminder Time</span>
          </div>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-3 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 mb-3"
          />
          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => setShowTimeSelect(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="secondary"
              size="sm"
              onClick={handleSetReminder}
            >
              Set Time
            </Button>
          </div>
        </div>
      )}
      
      {!reminderSet && !showTimeSelect && (
        <div className="mt-3 flex justify-end space-x-2">
          <Button 
            variant="outline"
            size="sm"
            onClick={() => setIsVisible(false)}
          >
            Skip
          </Button>
          <Button 
            variant="secondary"
            size="sm"
            onClick={() => setShowTimeSelect(true)}
          >
            Set Reminder
          </Button>
        </div>
      )}
    </div>
  )
}

export default SelfCareReminder