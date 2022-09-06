import { Event } from '../../domain/model/ApiClient/@types'
import { EventList } from '../organisms/EventList'

export const EventListPage = ({ events: event }: { events: Event[] }) => {
  return <EventList events={event} />
}
