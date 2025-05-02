import { useState, useEffect, useRef } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import { FiPlay, FiPause, FiRefreshCw } from 'react-icons/fi'

function MeditationTimer() {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [isActive, setIsActive] = useState(false)
  const [duration, setDuration] = useState(300)
  const timerRef = useRef(null)
  
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
      clearInterval(timerRef.current)
    }
    
    return () => clearInterval(timerRef.current)
  }, [isActive, timeLeft])
  
  const toggleTimer = () => {
    setIsActive(!isActive)
  }
  
  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(duration)
    clearInterval(timerRef.current)
  }
  
  const changeDuration = (newDuration) => {
    setDuration(newDuration)
    setTimeLeft(newDuration)
    setIsActive(false)
    clearInterval(timerRef.current)
  }
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  
  const progress = ((duration - timeLeft) / duration) * 100
  
  return (
    <Card title="Meditation Timer">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-6">
          {/* Breathing circle animation */}
          <div 
            className={`
              absolute inset-0 rounded-full bg-primary-100 
              ${isActive ? 'animate-breathe' : ''}
            `}
          ></div>
          
          {/* Progress circle */}
          <svg 
            className="absolute inset-0 transform -rotate-90 w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#e2e8f0" 
              strokeWidth="5"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#0ea5e9" 
              strokeWidth="5"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Timer display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-semibold">{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-6 w-full">
          <Button
            variant={duration === 180 ? 'primary' : 'outline'}
            fullWidth
            size="sm"
            onClick={() => changeDuration(180)}
          >
            3 min
          </Button>
          <Button
            variant={duration === 300 ? 'primary' : 'outline'}
            fullWidth
            size="sm"
            onClick={() => changeDuration(300)}
          >
            5 min
          </Button>
          <Button
            variant={duration === 600 ? 'primary' : 'outline'}
            fullWidth
            size="sm"
            onClick={() => changeDuration(600)}
          >
            10 min
          </Button>
        </div>
        
        <div className="flex space-x-3">
          <Button
            onClick={toggleTimer}
            icon={isActive ? <FiPause /> : <FiPlay />}
            variant={isActive ? 'outline-primary' : 'primary'}
          >
            {isActive ? 'Pause' : 'Start'}
          </Button>
          
          <Button
            onClick={resetTimer}
            variant="outline"
            icon={<FiRefreshCw />}
          >
            Reset
          </Button>
        </div>
        
        {isActive && (
          <p className="mt-4 text-center text-slate-600">
            Breathe in... breathe out...
          </p>
        )}
      </div>
    </Card>
  )
}

export default MeditationTimer