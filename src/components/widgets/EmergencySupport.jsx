import React from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import { FiPhoneCall, FiMessageSquare, FiHeart } from 'react-icons/fi'

function EmergencySupport() {
  return (
    <Card variant="danger">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-danger-100 text-danger-600 mb-3">
          <FiHeart className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-medium text-danger-700">Need Immediate Support?</h3>
        <p className="text-sm text-danger-600 mt-1">
          These resources are available 24/7 if you need to talk to someone right away.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <Button
          variant="danger"
          fullWidth
          icon={<FiPhoneCall />}
          iconPosition="left"
        >
          Crisis Helpline
        </Button>
        
        <Button
          variant="outline"
          className="border-danger-300 text-danger-700 hover:bg-danger-50"
          fullWidth
          icon={<FiMessageSquare />}
          iconPosition="left"
        >
          Text Support
        </Button>
      </div>
      
      <div className="border-t border-danger-100 pt-3 mt-3">
        <p className="text-xs text-center text-danger-600">
          If you or someone you know is in immediate danger, please call emergency services at <strong>911</strong>.
        </p>
      </div>
    </Card>
  )
}

export default EmergencySupport