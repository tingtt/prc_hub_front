import { User } from '../../domain/model/ApiClient/@types'
import { UserTableRow } from '../molecules/UserTableRow'

export const UserTable = ({
  users,
  enableAdimin,
}: {
  users: User[]
  enableAdimin: boolean
}) => {
  return (
    <div className='px-10 w-full table mt-4'>
      <thead>
        <th>ユーザー名</th>
        <th>メールアドレス</th>
        <th>権限</th>
        <th>GitHub</th>
        <th>Twitter</th>
      </thead>
      <tbody>
        {users.map((user) => {
          return <UserTableRow user={user} key={user.id} />
        })}
      </tbody>
    </div>
  )
}
