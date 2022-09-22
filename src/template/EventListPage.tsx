import { useRouter } from 'next/router'
import { Event } from '../../domain/model/ApiClient/@types'
import { ButtonPrimarySquare } from '../atoms/ButtonPrimarySquare'
import { HamburgerMenu } from '../molecules/HamburgerMenu'
import { EventList } from '../organisms/EventList'

export const EventListPage = ({
  events,
  isLoggedIn,
  isAblePostingEvents,
  isAbleManaging,
  suppressHydrationWarning,
}: {
  events: Event[]
  isLoggedIn: boolean
  isAblePostingEvents: boolean
  isAbleManaging: boolean
  suppressHydrationWarning?: boolean | undefined
}) => {
  const router = useRouter()

  return (
    <div suppressHydrationWarning={suppressHydrationWarning}>
      <div className='flex flex-col relative'>
        <div
          className={`
          my-20 pl-10 pr-5 py-2 w-max bg-neutral
          text-neutral-content font-serif font-bold
          text-3xl whitespace-nowrap shadow-md
        `}
        >
          予定されている勉強会
        </div>
        <div className='px-10 mx-auto w-full max-w-[800px]'>
          {/* TODO: データ取得中のスケルトン表示 */}
          <EventList events={events} />
        </div>
      </div>
      <div className='sticky z-10 bottom-8 flex justify-end pr-8'>
        {isAblePostingEvents && (
          <div className='pr-4'>
            <ButtonPrimarySquare
              onClick={() => {
                router.push('/events/new')
              }}
            >
              <svg
                width='22'
                height='22'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='black' />
              </svg>
            </ButtonPrimarySquare>
          </div>
        )}
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
    </div>
  )
}
