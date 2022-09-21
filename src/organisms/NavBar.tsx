import React from 'react'

export const NavBar = ({
  title,
  trailingItems,
}: {
  title: string
  trailingItems: React.ReactNode[]
}) => {
  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className='flex-1 ml-2'>
        <a className='text-xl'>{title}</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          {trailingItems.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
