import { Event } from '../../domain/model/ApiClient/@types'
import { EventListItem } from '../molecules/EventListItem'

export const EventList = ({ events }: { events: Event[] }) => {
  return (
    <div>
      {(events ?? []).map((event) => {
        return <EventListItem event={event} key={`event-${event.id}`} />
      })}
    </div>
  )
}
