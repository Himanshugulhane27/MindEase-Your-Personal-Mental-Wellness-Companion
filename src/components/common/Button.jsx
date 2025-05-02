import React from 'react'

function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  disabled = false
}) {
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700',
    success: 'bg-success-500 text-white hover:bg-success-600 active:bg-success-700',
    danger: 'bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700',
    outline: 'bg-transparent border border-slate-300 text-slate-600 hover:bg-slate-50 active:bg-slate-100',
    'outline-primary': 'bg-transparent border border-primary-300 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 active:bg-slate-200',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-2.5 text-lg',
  }
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : ''
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  const renderChildren = () => {
    if (!icon) return children
    
    return (
      <span className="flex items-center justify-center">
        {iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </span>
    )
  }
  
  return (
    <button
      type={type}
      className={`
        rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${disabledClasses}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {renderChildren()}
    </button>
  )
}

export default Button