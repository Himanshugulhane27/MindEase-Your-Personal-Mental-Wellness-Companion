import { useState } from 'react'
import MoodTracker from '../components/widgets/MoodTracker'
import MeditationTimer from '../components/widgets/MeditationTimer'
import DailyAffirmation from '../components/widgets/DailyAffirmation'
import WellnessJournal from '../components/widgets/WellnessJournal'
import GoalTracker from '../components/widgets/GoalTracker'
import EmergencySupport from '../components/widgets/EmergencySupport'
import SelfCareReminder from '../components/widgets/SelfCareReminder'
import { FiPlus } from 'react-icons/fi'
import Button from '../components/common/Button'

function Dashboard() {
  const [greeting, setGreeting] = useState(() => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good Morning"
    if (hour < 18) return "Good Afternoon"
    return "Good Evening"
  })
  
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">{greeting}, Sarah</h1>
          <p className="text-slate-500">Your wellness dashboard for Monday, March 4th</p>
        </div>
        <Button variant="outline" icon={<FiPlus />}>
          Add Widget
        </Button>
      </div>
      
      <SelfCareReminder />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
        <MoodTracker />
        <MeditationTimer />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <DailyAffirmation />
        <WellnessJournal />
        <div className="flex flex-col space-y-6">
          <GoalTracker />
          <EmergencySupport />
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-xl shadow-card border border-slate-100 p-5">
        <h2 className="text-xl font-semibold mb-3">Wellness Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h3 className="font-medium text-slate-800 mb-1">Stay Hydrated</h3>
            <p className="text-sm text-slate-600">
              Drinking enough water improves mood, cognition, and overall well-being.
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h3 className="font-medium text-slate-800 mb-1">Digital Detox</h3>
            <p className="text-sm text-slate-600">
              Take regular breaks from screens to reduce stress and improve focus.
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h3 className="font-medium text-slate-800 mb-1">Move Your Body</h3>
            <p className="text-sm text-slate-600">
              Even a brief walk can boost your mood and energy levels significantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard