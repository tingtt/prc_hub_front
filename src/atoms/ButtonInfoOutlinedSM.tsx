import React from 'react'

export const ButtonInfoOutlinedSM = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className={`
        btn btn-sm btn-outline btn-info rounded-none
        fill-info hover:fill-info-content
      `}
    >
      {children}
    </div>
  )
}
