import { Event } from '../../domain/model/ApiClient/@types'
import { EventTableRow } from '../molecules/EventTableRow'

export const EventTable = ({
  events,
  enableAdimin,
}: {
  events: Event[]
  enableAdimin: boolean
}) => {
  return (
    <div className='px-10 w-full table mt-4'>
      <thead>
        <th>イベント名</th>
        <th>作成者</th>
        <th>場所</th>
        <th>日時</th>
        <th>公開</th>
      </thead>
      <tbody>
        {events.map((event) => {
          return <EventTableRow event={event} key={event.id} />
        })}
      </tbody>
    </div>
  )
}
