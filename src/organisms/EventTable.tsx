import { Event, User } from '../../domain/model/ApiClient/@types'
import { EventTableRow } from '../molecules/EventTableRow'

export const EventTable = ({ events, me }: { events: Event[]; me: User }) => {
  return (
    <table className='px-10 w-full table mt-4'>
      <thead>
        <tr>
          <th>イベント名</th>
          <th>作成者</th>
          <th>場所</th>
          <th>日時</th>
          <th>公開</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => {
          return (
            <EventTableRow
              event={event}
              key={event.id}
              isMine={event.user?.id == me.id}
            />
          )
        })}
      </tbody>
    </table>
  )
}
