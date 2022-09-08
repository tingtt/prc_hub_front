import Link from 'next/link'

export const HamburgerMenu = () => {
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
      <ul className='dropdown-content menu rounded-box p-2 mr-2 shadow bg-neutral'>
        <li className='whitespace-nowrap'>
          <Link href='/'>ホーム</Link>
        </li>
        <li className='whitespace-nowrap'>
          <Link href='/events'>イベント情報</Link>
        </li>
        <li className='whitespace-nowrap'>
          <Link href='#'>先輩の作品</Link>
        </li>
        <li className='whitespace-nowrap'>
          <Link href='#'>プロ研について</Link>
        </li>
      </ul>
    </div>
  )
}
