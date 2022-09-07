import React from 'react'

export const InfoLabel = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='btn btn-xs btn-info no-animation cursor-default rounded-none'>
      {children}
    </div>
  )
}
