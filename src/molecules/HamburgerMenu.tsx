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
          className='fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 512 512'
        >
          <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
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
