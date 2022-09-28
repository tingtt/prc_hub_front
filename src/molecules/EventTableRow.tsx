import { useState } from 'react'
import { useUpdateEvent } from '../../application/Event/update'
import { Event } from '../../domain/model/ApiClient/@types'
import { Checkbox } from '../atoms/Checkbox'

export const EventTableRow = ({
  event,
  isMine,
}: {
  event: Event
  isMine: boolean
}) => {
  const [published, setPublished] = useState(event.published)

  const { updateEvent } = useUpdateEvent()

  return (
    <tr>
      <td>{event.name}</td>
      <td>{event.user?.name ?? '-'}</td>
      <td>{event.location ?? '-'}</td>
      <td>
        <ul>
          {(event.datetimes ?? []).map(({ start, end }) => {
            const date = new Date(start)
            return (
              <li key={`dt-${start}`}>
                {`${date.getMonth() + 1}月${date.getDate()}日`}
              </li>
            )
          })}
        </ul>
      </td>
      <td>
        <Checkbox checked={published} />
      </td>
    </tr>
  )
}
