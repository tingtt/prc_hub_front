import { HamburgerMenu } from '../molecules/HamburgerMenu'
import { LogoWithCaption } from '../organisms/LogoWithCaption'
import { ImgPaintBottomLeft } from '../atoms/ImgPaintBottomLeft'
import { ImgPaintTopRight } from '../atoms/ImgPaintTopRight'

export const TopPage = ({
  comment,
  isLoggedIn,
  isAbleManaging,
  suppressHydrationWarning,
}: {
  comment: string
  isLoggedIn: boolean
  isAbleManaging: boolean
  suppressHydrationWarning?: boolean | undefined
}) => {
  return (
    <div
      className='relative w-screen h-screen'
      suppressHydrationWarning={suppressHydrationWarning}
    >
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
            ...((): {
              href: string
              name: string
            }[] => {
              return isAbleManaging
                ? [
                    {
                      href: '/manage',
                      name: '管理者ページ',
                    },
                  ]
                : []
            })(),
            {
              href: isLoggedIn ? '/logout' : '/login',
              name: isLoggedIn ? 'ログアウト' : 'ログイン',
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
