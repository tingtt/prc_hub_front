import { UpdateUserBody } from '../../domain/model/ApiClient/@types'
import { useApi } from '../ApiClient'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const useUpdateUser = () => {
  const client = useApi(NEXT_PUBLIC_API_URL())

  const updateUser = (
    id: number,
    body: UpdateUserBody,
    callback: (success: boolean) => Promise<void>
  ) => {
    client.users
      ._id(id)
      .patch({ body })
      .then((res) => {
        if (res.status == 200) {
          // 更新成功
          callback(true)
        } else {
          // 更新失敗
          callback(true)
        }
      })
  }

  return { updateUser }
}
