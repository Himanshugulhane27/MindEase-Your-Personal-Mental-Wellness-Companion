import { useState } from 'react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { FiPhone, FiMessageSquare, FiHeart, FiUsers, FiBookOpen, FiHelpCircle, FiCheck } from 'react-icons/fi'

function Support() {
  const [selectedResource, setSelectedResource] = useState(null)
  
  const emergencyResources = [
    {
      id: 'crisis',
      name: 'Crisis Hotline',
      description: 'Immediate support for those in emotional distress or suicidal crisis.',
      contact: '1-800-273-8255',
      icon: <FiPhone className="h-5 w-5" />,
      color: 'danger'
    },
    {
      id: 'text',
      name: 'Crisis Text Line',
      description: 'Text-based support for those in crisis.',
      contact: 'Text HOME to 741741',
      icon: <FiMessageSquare className="h-5 w-5" />,
      color: 'primary'
    }
  ]
  
  const supportResources = [
    {
      id: 'therapy',
      name: 'Find a Therapist',
      description: 'Search for licensed mental health professionals in your area.',
      icon: <FiUsers className="h-5 w-5" />,
      content: `
        <h3>Finding the Right Therapist</h3>
        <p>When looking for a therapist, consider the following:</p>
        <ul>
          <li>Their specialization and experience with your specific concerns</li>
          <li>Their therapeutic approach and whether it aligns with your preferences</li>
          <li>Practical considerations like location, availability, and cost</li>
          <li>Whether they accept your insurance</li>
          <li>Your comfort level with them during an initial consultation</li>
        </ul>
        <p>Resources to help you find a therapist:</p>
        <ul>
          <li>Psychology Today's Therapist Directory</li>
          <li>Your insurance provider's directory of in-network therapists</li>
          <li>Employee Assistance Program (EAP) if available through your workplace</li>
          <li>Local mental health clinics or community centers</li>
        </ul>
      `
    },
    {
      id: 'selfhelp',
      name: 'Self-Help Resources',
      description: 'Books, workbooks, and online courses for mental wellness.',
      icon: <FiBookOpen className="h-5 w-5" />,
      content: `
        <h3>Recommended Self-Help Resources</h3>
        <p>The following resources can complement professional support:</p>
        <h4>Books</h4>
        <ul>
          <li>"The Anxiety and Phobia Workbook" by Edmund J. Bourne</li>
          <li>"Feeling Good: The New Mood Therapy" by David D. Burns</li>
          <li>"Atomic Habits" by James Clear</li>
          <li>"Self-Compassion: The Proven Power of Being Kind to Yourself" by Kristin Neff</li>
        </ul>
        <h4>Apps and Online Resources</h4>
        <ul>
          <li>Headspace - Guided meditation and mindfulness</li>
          <li>Woebot - AI-based cognitive behavioral therapy</li>
          <li>MoodMission - Evidence-based strategies for managing difficult emotions</li>
          <li>The Center for Mindful Self-Compassion (online courses and resources)</li>
        </ul>
      `
    },
    {
      id: 'community',
      name: 'Support Groups',
      description: 'Connect with others who share similar experiences.',
      icon: <FiHeart className="h-5 w-5" />,
      content: `
        <h3>Benefits of Support Groups</h3>
        <p>Support groups can provide:</p>
        <ul>
          <li>A sense of community and belonging</li>
          <li>A safe space to share your experiences</li>
          <li>Practical advice and coping strategies from others who understand</li>
          <li>Validation of your feelings and experiences</li>
          <li>Hope and inspiration from seeing others who are further along in their healing journey</li>
        </ul>
        <p>Places to find support groups:</p>
        <ul>
          <li>Mental Health America's support group locator</li>
          <li>National Alliance on Mental Illness (NAMI) local chapters</li>
          <li>Community centers and hospitals</li>
          <li>Online communities like Mental Health on Reddit or Discord servers focused on mental health</li>
        </ul>
      `
    }
  ]
  
  const faqs = [
    {
      question: "How do I know if I need professional help?",
      answer: "Consider seeking professional help if you're experiencing persistent feelings of sadness, anxiety, or other emotional distress that interferes with your daily life, relationships, or work. Other signs include significant changes in sleep, appetite, or energy levels, thoughts of self-harm, or difficulty managing stress."
    },
    {
      question: "What's the difference between a psychiatrist and a therapist?",
      answer: "A psychiatrist is a medical doctor who can diagnose mental health conditions and prescribe medication. A therapist (which may include psychologists, licensed counselors, or social workers) provides talk therapy to help you understand and manage your thoughts, feelings, and behaviors. Many people work with both for comprehensive care."
    },
    {
      question: "How can I support someone else's mental health?",
      answer: "Listen without judgment, express concern and support, encourage them to seek professional help if needed, and educate yourself about their specific challenges. Avoid giving unsolicited advice or minimizing their feelings. Remember that you can provide support, but you can't 'fix' someone else's mental health."
    },
    {
      question: "Is it normal to not feel better right away when starting therapy?",
      answer: "Yes, therapy is often a gradual process. Sometimes you might feel worse before feeling better as you confront difficult emotions. Progress isn't always linear, and it may take several sessions to notice significant changes. Be patient with yourself and communicate with your therapist about your expectations and progress."
    }
  ]
  
  const renderResourceContent = () => {
    if (!selectedResource) return null
    
    const resource = [...emergencyResources, ...supportResources].find(r => r.id === selectedResource)
    if (!resource) return null
    
    return (
      <div className="mt-6 p-6 bg-white rounded-xl shadow-card animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{resource.name}</h2>
        
        {resource.contact && (
          <div className="mb-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h3 className="font-medium mb-1">Contact Information:</h3>
            <p className="text-lg">{resource.contact}</p>
          </div>
        )}
        
        {resource.content && (
          <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: resource.content }}>
          </div>
        )}
        
        <div className="mt-6 flex justify-end">
          <Button 
            variant="outline"
            onClick={() => setSelectedResource(null)}
          >
            Back to Resources
          </Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Support Resources</h1>
        <p className="text-slate-500">
          Access helpful resources and guidance for your mental wellness journey.
        </p>
      </div>
      
      <Card 
        variant="danger" 
        title="Emergency Support" 
        className="mb-6"
      >
        <p className="text-danger-700 mb-4">
          If you or someone you know is experiencing a mental health emergency or having thoughts of suicide, please reach out for immediate help using one of the resources below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyResources.map((resource) => (
            <div 
              key={resource.id}
              className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedResource(resource.id)}
            >
              <div className="flex items-start">
                <div className={`rounded-full p-3 mr-3 bg-${resource.color}-100 text-${resource.color}-600`}>
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{resource.name}</h3>
                  <p className="text-sm text-slate-600 mb-2">{resource.description}</p>
                  <p className="font-medium">{resource.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-center text-slate-700">
            <strong>Always call 911</strong> if you or someone else is in immediate danger.
          </p>
        </div>
      </Card>
      
      {selectedResource ? (
        renderResourceContent()
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {supportResources.map((resource) => (
              <Card
                key={resource.id}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full"
                onClick={() => setSelectedResource(resource.id)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="rounded-full p-4 mb-4 bg-primary-100 text-primary-600">
                    {resource.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{resource.name}</h3>
                  <p className="text-slate-600 mb-4">{resource.description}</p>
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    className="mt-auto"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-xl shadow-card mb-8">
            <div className="divide-y">
              {faqs.map((faq, index) => (
                <div key={index} className="p-5">
                  <h3 className="flex items-start">
                    <FiHelpCircle className="mt-1 mr-2 text-primary-500" />
                    <span className="font-medium">{faq.question}</span>
                  </h3>
                  <p className="ml-7 mt-2 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Card title="Self-Care Reminders" variant="success">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-success-100 text-success-600 mr-3 mt-0.5">
                  <FiCheck className="h-4 w-4" />
                </div>
                <p>Remember that seeking help is a sign of strength, not weakness.</p>
              </li>
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-success-100 text-success-600 mr-3 mt-0.5">
                  <FiCheck className="h-4 w-4" />
                </div>
                <p>Take care of your basic needs: sleep, nutrition, and physical activity.</p>
              </li>
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-success-100 text-success-600 mr-3 mt-0.5">
                  <FiCheck className="h-4 w-4" />
                </div>
                <p>Set boundaries and learn to say no when you need to protect your energy.</p>
              </li>
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-success-100 text-success-600 mr-3 mt-0.5">
                  <FiCheck className="h-4 w-4" />
                </div>
                <p>Practice self-compassion and treat yourself with the same kindness you would offer to a friend.</p>
              </li>
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-success-100 text-success-600 mr-3 mt-0.5">
                  <FiCheck className="h-4 w-4" />
                </div>
                <p>Celebrate small victories in your mental wellness journey.</p>
              </li>
            </ul>
          </Card>
        </>
      )}
    </div>
  )
}

export default Support