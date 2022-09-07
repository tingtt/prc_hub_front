import { Event } from '../../domain/model/ApiClient/@types'
import { Divider } from '../atoms/Divider'
import { EventListItem } from '../molecules/EventListItem'

export const EventList = ({ events }: { events: Event[] }) => {
  return (
    <div>
      <div className='mb-8'>
        <Divider />
      </div>
      {(events ?? []).map((event) => {
        return (
          <div key={`event-${event.id}`}>
            <EventListItem event={event} />
            <div className='my-8'>
              <Divider />
            </div>
          </div>
        )
      })}
    </div>
  )
}
