import { UpdateEventBody } from '../../domain/model/ApiClient/@types'
import { useApi } from '../ApiClient'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const useUpdateEvent = () => {
  const client = useApi(NEXT_PUBLIC_API_URL())

  const updateEvent = (
    id: number,
    body: UpdateEventBody,
    callback: (success: boolean) => Promise<void>
  ) => {
    client.events
      ._id(id)
      .patch({ body })
      .then((res) => {
        if (res.status == 200) {
          // 更新成功
          callback(true)
        } else {
          // 更新失敗
          callback(false)
        }
      })
  }

  return { updateEvent }
}
