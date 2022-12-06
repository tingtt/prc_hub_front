import { User } from '../../domain/model/ApiClient/@types'
import { UserTableRow } from '../molecules/UserTableRow'

export const UserTable = ({ users, me }: { users: User[]; me: User }) => {
  return (
    <table className='w-full table'>
      <thead>
        <tr>
          <th>ユーザー名</th>
          <th>メールアドレス</th>
          <th>権限</th>
          <th>スター数</th>
          <th>GitHub</th>
          <th>Twitter</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <UserTableRow user={user} key={user.id} isMe={user.id == me.id} />
          )
        })}
      </tbody>
    </table>
  )
}
