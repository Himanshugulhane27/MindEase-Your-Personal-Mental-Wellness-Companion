import React from 'react'

function Card({ 
  title, 
  children, 
  className = '', 
  headerRight = null,
  variant = 'default',
  onClick = null
}) {
  const variantClasses = {
    default: 'bg-white',
    primary: 'bg-primary-50 border-primary-100',
    secondary: 'bg-secondary-50 border-secondary-100',
    accent: 'bg-accent-50 border-accent-100',
    success: 'bg-success-50 border-success-100',
    warning: 'bg-warning-50 border-warning-100',
    danger: 'bg-danger-50 border-danger-100'
  }
  
  return (
    <div 
      className={`rounded-xl border border-slate-100 shadow-card transition-all duration-300 hover:shadow-lg overflow-hidden ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {title && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <h3 className="text-lg font-medium">{title}</h3>
          {headerRight && <div>{headerRight}</div>}
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </div>
  )
}

export default Card