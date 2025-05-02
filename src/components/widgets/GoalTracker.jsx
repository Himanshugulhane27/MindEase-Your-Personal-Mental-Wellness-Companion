import { useState } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import { FiPlus, FiCheck, FiTrendingUp, FiX } from 'react-icons/fi'

function GoalTracker() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Meditate Daily',
      target: 30,
      current: 22,
      unit: 'days',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Weekly Exercise',
      target: 5,
      current: 3,
      unit: 'times',
      color: 'success'
    },
    {
      id: 3,
      title: 'Journaling',
      target: 15,
      current: 4, 
      unit: 'entries',
      color: 'secondary'
    }
  ])
  
  const [showAddGoal, setShowAddGoal] = useState(false)
  const [newGoal, setNewGoal] = useState({
    title: '',
    target: '',
    unit: '',
    color: 'primary'
  })
  
  const incrementProgress = (id) => {
    setGoals(goals.map(goal => {
      if (goal.id === id && goal.current < goal.target) {
        return { ...goal, current: goal.current + 1 }
      }
      return goal
    }))
  }
  
  const handleAddGoal = () => {
    if (!newGoal.title || !newGoal.target) return
    
    const goal = {
      id: Date.now(),
      title: newGoal.title,
      target: parseInt(newGoal.target),
      current: 0,
      unit: newGoal.unit || 'times',
      color: newGoal.color
    }
    
    setGoals([...goals, goal])
    setNewGoal({ title: '', target: '', unit: '', color: 'primary' })
    setShowAddGoal(false)
  }
  
  const getProgressPercentage = (current, target) => {
    return Math.min(Math.round((current / target) * 100), 100)
  }
  
  const getMotivationalMessage = (percentage) => {
    if (percentage >= 100) return "Goal achieved! Amazing work! 🎉"
    if (percentage >= 75) return "Almost there! You're doing great! 💪"
    if (percentage >= 50) return "Halfway there! Keep going! 🌟"
    if (percentage >= 25) return "Great start! Keep up the momentum! 🚀"
    return "You've begun your journey! Every step counts! 🌱"
  }
  
  const getProgressColorClass = (color) => {
    const colorMap = {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      accent: 'bg-accent-500',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
      danger: 'bg-danger-500'
    }
    return colorMap[color] || 'bg-primary-500'
  }
  
  return (
    <Card 
      title="Goal Tracker" 
      headerRight={
        <Button
          variant="ghost"
          size="sm"
          icon={<FiPlus />}
          onClick={() => setShowAddGoal(true)}
        >
          New Goal
        </Button>
      }
    >
      {showAddGoal ? (
        <div className="animate-fade-in p-4 bg-slate-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Add New Goal</h3>
            <button 
              onClick={() => setShowAddGoal(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <FiX />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Goal Title
              </label>
              <input
                type="text"
                value={newGoal.title}
                onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter goal title"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Target
                </label>
                <input
                  type="number"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter target"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Unit
                </label>
                <input
                  type="text"
                  value={newGoal.unit}
                  onChange={(e) => setNewGoal({ ...newGoal, unit: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., days, times"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Color Theme
              </label>
              <select
                value={newGoal.color}
                onChange={(e) => setNewGoal({ ...newGoal, color: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="primary">Blue</option>
                <option value="secondary">Purple</option>
                <option value="accent">Orange</option>
                <option value="success">Green</option>
              </select>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline"
                size="sm"
                onClick={() => setShowAddGoal(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleAddGoal}
                disabled={!newGoal.title || !newGoal.target}
              >
                Add Goal
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {goals.map((goal) => {
            const progressPercentage = getProgressPercentage(goal.current, goal.target)
            
            return (
              <div key={goal.id} className="animate-fade-in">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">{goal.title}</h4>
                  <div className="flex items-center">
                    <span className="text-sm mr-2 text-slate-600">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-1"
                      onClick={() => incrementProgress(goal.id)}
                      disabled={goal.current >= goal.target}
                    >
                      <FiCheck className={goal.current >= goal.target ? 'text-success-500' : ''} />
                    </Button>
                  </div>
                </div>
                
                <div className="relative w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${getProgressColorClass(goal.color)}`}
                    style={{ width: `${progressPercentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20"></div>
                  </div>
                </div>
                
                {goal === goals[0] && (
                  <div className="mt-2 flex items-center text-slate-600 text-sm">
                    <FiTrendingUp className="mr-1.5 text-success-500" />
                    <span>{getMotivationalMessage(progressPercentage)}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </Card>
  )
}

export default GoalTracker