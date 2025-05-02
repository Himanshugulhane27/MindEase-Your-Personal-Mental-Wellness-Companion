import { useState } from 'react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { FiBookmark, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi'

// Sample affirmation categories with their respective affirmations
const affirmationCategories = [
  {
    id: 1,
    name: 'Self-Love',
    color: 'primary',
    affirmations: [
      'I am worthy of love and respect.',
      'I accept myself completely as I am.',
      'I appreciate and value my unique qualities.',
      'I treat myself with kindness and compassion.'
    ]
  },
  {
    id: 2,
    name: 'Strength',
    color: 'success',
    affirmations: [
      'I am capable of overcoming any challenge.',
      'I am resilient and can bounce back from setbacks.',
      'I have the inner strength to handle difficult situations.',
      'I grow stronger with every experience.'
    ]
  },
  {
    id: 3,
    name: 'Abundance',
    color: 'accent',
    affirmations: [
      'I attract positivity and abundance into my life.',
      'I am open to receiving all the good that comes my way.',
      'I am grateful for the abundance I already have.',
      'My life is filled with infinite possibilities.'
    ]
  },
  {
    id: 4,
    name: 'Peace',
    color: 'secondary',
    affirmations: [
      'I choose peace over worry and anxiety.',
      'I am calm, centered, and grounded.',
      'My mind is clear and my heart is at peace.',
      'I release tension and embrace tranquility.'
    ]
  }
]

function Affirmations() {
  const [categories, setCategories] = useState(affirmationCategories)
  const [savedAffirmations, setSavedAffirmations] = useState([
    'I am worthy of love and respect.',
    'I am calm, centered, and grounded.'
  ])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newAffirmation, setNewAffirmation] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(1)
  
  const handleSaveAffirmation = (affirmation) => {
    if (savedAffirmations.includes(affirmation)) {
      setSavedAffirmations(savedAffirmations.filter(a => a !== affirmation))
    } else {
      setSavedAffirmations([...savedAffirmations, affirmation])
    }
  }
  
  const handleAddAffirmation = () => {
    if (newAffirmation.trim() === '') return
    
    const categoryIndex = categories.findIndex(c => c.id === selectedCategory)
    if (categoryIndex !== -1) {
      const updatedCategories = [...categories]
      updatedCategories[categoryIndex].affirmations = [
        ...updatedCategories[categoryIndex].affirmations,
        newAffirmation
      ]
      setCategories(updatedCategories)
      setNewAffirmation('')
      setShowAddForm(false)
    }
  }
  
  const getCategoryColor = (colorName) => {
    const colorMap = {
      primary: 'bg-primary-50 border-primary-100 text-primary-800',
      secondary: 'bg-secondary-50 border-secondary-100 text-secondary-800',
      accent: 'bg-accent-50 border-accent-100 text-accent-800',
      success: 'bg-success-50 border-success-100 text-success-800',
    }
    return colorMap[colorName] || colorMap.primary
  }
  
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Daily Affirmations</h1>
          <p className="text-slate-500">
            Positive statements to encourage and uplift your mindset.
          </p>
        </div>
        <Button 
          icon={<FiPlus />} 
          onClick={() => setShowAddForm(true)}
        >
          Create Affirmation
        </Button>
      </div>
      
      {/* Saved affirmations section */}
      {savedAffirmations.length > 0 && (
        <Card 
          title="My Saved Affirmations" 
          className="mb-6"
          variant="secondary"
        >
          <div className="space-y-3">
            {savedAffirmations.map((affirmation, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg border border-secondary-100"
              >
                <p className="text-slate-700 italic">"{affirmation}"</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-secondary-600" 
                  icon={<FiBookmark className="fill-secondary-500" />}
                  onClick={() => handleSaveAffirmation(affirmation)}
                />
              </div>
            ))}
          </div>
        </Card>
      )}
      
      {/* Add new affirmation form */}
      {showAddForm && (
        <Card title="Create New Affirmation" className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Affirmation Text
            </label>
            <textarea
              value={newAffirmation}
              onChange={(e) => setNewAffirmation(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Write your affirmation here..."
              rows={3}
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(Number(e.target.value))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleAddAffirmation}>
              Save Affirmation
            </Button>
          </div>
        </Card>
      )}
      
      {/* Affirmation categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Card 
            key={category.id} 
            title={category.name}
            className={getCategoryColor(category.color)}
          >
            <div className="space-y-3">
              {category.affirmations.map((affirmation, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100 shadow-sm"
                >
                  <p className="text-slate-700 italic">"{affirmation}"</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={savedAffirmations.includes(affirmation) ? 'text-accent-500' : 'text-slate-400'}
                    icon={<FiBookmark className={savedAffirmations.includes(affirmation) ? 'fill-accent-500' : ''} />}
                    onClick={() => handleSaveAffirmation(affirmation)}
                  />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Affirmations