import React from 'react'
import clsx from 'clsx'

const Card = ({ children, className = '', padding = true, hover = true }) => {
  return (
    <div
      className={clsx(
        'card',
        padding && 'p-6 md:p-8',
        !hover && 'hover:shadow-soft',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
