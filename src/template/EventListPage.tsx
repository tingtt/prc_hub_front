import { Event } from '../../domain/model/ApiClient/@types'
import { EventList } from '../organisms/EventList'

export const EventListPage = ({ events: event }: { events: Event[] }) => {
  return (
    <div className='flex flex-col'>
      <div
        className={`
          my-20 pl-10 pr-5 py-2 w-max bg-neutral
          text-neutral-content font-serif font-bold
          text-3xl whitespace-nowrap
        `}
      >
        予定されている勉強会
      </div>
      <div className='mx-auto px-10'>
        <EventList events={event} />
      </div>
    </div>
  )
}
