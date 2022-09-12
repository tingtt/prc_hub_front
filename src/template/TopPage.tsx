import { HamburgerMenu } from '../molecules/HamburgerMenu'
import { LogoWithCaption } from '../organisms/LogoWithCaption'
import { ImgPaintBottomLeft } from '../atoms/ImgPaintBottomLeft'
import { ImgPaintTopRight } from '../atoms/ImgPaintTopRight'

export const TopPage = ({ comment }: { comment: string }) => {
  return (
    <div className='relative w-screen h-screen'>
      <div className='absolute z-10 bottom-8 right-8'>
        <HamburgerMenu
          items={[
            {
              href: '/',
              name: 'ホーム',
            },
            {
              href: '/events',
              name: 'イベント情報',
            },
            {
              href: '#',
              name: '先輩の作品',
            },
            {
              href: '#',
              name: 'プロ研について',
            },
            {
              href: '/login',
              name: 'ログイン',
            },
          ]}
        />
      </div>
      <div className='absolute bottom-0'>
        <ImgPaintBottomLeft />
      </div>
      <div className='absolute right-0'>
        <ImgPaintTopRight />
      </div>
      <div className='flex justify-center mx-16 h-full'>
        <LogoWithCaption comment={comment} />
      </div>
    </div>
  )
}
