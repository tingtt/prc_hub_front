import React from 'react'

export const ButtonInfoOutlinedSM = ({
  children,
  onClick,
}: React.PropsWithChildren & { onClick: () => void }) => {
  return (
    <div
      className={`
        btn btn-sm btn-outline btn-info rounded-none
        fill-info hover:fill-info-content
      `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
