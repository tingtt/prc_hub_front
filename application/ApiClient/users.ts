import { useState, useEffect } from 'react'
import { useApi } from '.'
import { User } from '../../domain/model/ApiClient/@types'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const useUsers = () => {
  const [initial, setInitial] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const api = useApi(NEXT_PUBLIC_API_URL())
  useEffect(() => {
    if (initial) {
      api.users.get().then((res) => {
        if (Array.isArray(res.body)) {
          setUsers(res.body ?? [])
          setInitial(false)
        }
      })
    }
  })

  return { users }
}
