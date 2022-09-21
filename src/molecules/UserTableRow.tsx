import { User } from '../../domain/model/ApiClient/@types'

export const UserTableRow = ({ user }: { user: User }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <select className='select' disabled={user.admin}>
          <option value='-'>-</option>
          <option
            value='post_event_availabled'
            selected={user.post_event_availabled && !user.manage}
          >
            イベント投稿
          </option>
          <option value='manage' selected={user.manage && !user.admin}>
            イベント投稿・ユーザー管理
          </option>
          <option value='manage' selected={user.admin}>
            管理者
          </option>
        </select>
      </td>
      <td>
        <a
          href={`${user.github_username}`}
          onClick={() => {
            // 新規タブでドキュメントを表示
            window.open(`https://github.com/${user.github_username}`)
          }}
        >
          {user.github_username}
        </a>
      </td>
      <td>
        <a
          href={`${user.twitter_id}`}
          onClick={() => {
            // 新規タブでドキュメントを表示
            window.open(`https://twitter.com/${user.twitter_id}`)
          }}
        >
          {user.twitter_id}
        </a>
      </td>
    </tr>
  )
}
