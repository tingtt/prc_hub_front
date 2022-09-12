import Link from 'next/link'

export const HamburgerMenu = ({
  items,
}: {
  items: { href: string; name: string }[]
}) => {
  return (
    <div className='dropdown dropdown-left dropdown-end'>
      <label className='btn btn-lg btn-primary btn-square' tabIndex={0}>
        {/* TODO: ボタンの画像を切り替え */}
        {/* hamburger icon */}
        <svg
          width='24'
          height='18'
          viewBox='0 0 18 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z'
            fill='black'
          />
        </svg>
      </label>
      <ul className='dropdown-content menu rounded-box p-2 mr-2 shadow bg-neutral text-neutral-content'>
        {items.map(({ href, name }) => (
          <li className='whitespace-nowrap' key={name}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
