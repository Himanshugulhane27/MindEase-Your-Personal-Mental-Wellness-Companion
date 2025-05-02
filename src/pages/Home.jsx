import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import { FiArrowRight } from 'react-icons/fi'

function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center py-10 md:py-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
          Welcome to <span className="text-primary-600">MindEase</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
          Your personal space for mental wellness and self-care.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/dashboard">
            <Button size="lg" icon={<FiArrowRight />} iconPosition="right">
              Go to Dashboard
            </Button>
          </Link>
          <Link to="/support">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        <div className="bg-white rounded-xl shadow-card p-6 transition-all duration-300 hover:shadow-lg animate-slide-up">
          <div className="bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Track Your Journey</h3>
          <p className="text-slate-600">
            Monitor your mood patterns and journal your thoughts to gain insights into your mental wellness.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-card p-6 transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-secondary-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Practice Mindfulness</h3>
          <p className="text-slate-600">
            Use our meditation timer and breathing exercises to reduce stress and increase present-moment awareness.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-card p-6 transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-accent-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Self-Care Habits</h3>
          <p className="text-slate-600">
            Set goals, track progress, and build healthy habits that support your well-being and personal growth.
          </p>
        </div>
      </div>
      
      <div className="bg-primary-50 rounded-xl p-8 my-12 border border-primary-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-soft animate-pulse-slow">
              <span className="text-5xl">🧘</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-800 mb-3">A Personalized Approach to Wellness</h2>
            <p className="text-primary-700 mb-4">
              MindEase adapts to your unique needs, helping you build a mental wellness routine that works for your lifestyle.
            </p>
            <p className="text-primary-600 text-sm">
              Our evidence-based tools and resources are designed with input from mental health professionals to support your journey to well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home