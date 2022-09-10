import { Event } from '../../domain/model/ApiClient/@types'
import { HamburgerMenu } from '../molecules/HamburgerMenu'
import { EventList } from '../organisms/EventList'

export const EventListPage = ({ events: event }: { events: Event[] }) => {
  return (
    <div>
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
        <div className='mx-auto px-10'>
          {/* データ取得中のスケルトン表示 */}
          <EventList events={event} />
        </div>
      </div>
      <div className='sticky z-10 bottom-8 flex justify-end pr-8'>
        <HamburgerMenu />
      </div>
    </div>
  )
}
