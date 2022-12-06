import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAsyncFn } from 'react-use'
import { useUpdateUser } from '../../application/User/update'
import { UpdateUserBody, User } from '../../domain/model/ApiClient/@types'

export const UserTableRow = ({ user, isMe }: { user: User; isMe: boolean }) => {
  const router = useRouter()

  const getPermissionStr = (u: User) => {
    if (u.admin) {
      return ''
    }
    if (u.post_event_availabled && !u.manage && !u.admin) {
      return 'post_event_availabled'
    }
    if (u.manage && !u.admin) {
      return 'manage'
    }
    return '-'
  }
  const [permission, setPermission] = useState(getPermissionStr(user))

  const [updating, setUpdating] = useState(false)
  const { updateUser, addStar } = useUpdateUser()
  const [, doUpdateUser] = useAsyncFn(
    async (value: '-' | 'post_event_availabled' | 'manage') => {
      // <select>の`value`を更新
      setPermission(value)
      // 状態遷移
      setUpdating(true)
      // 更新リクエスト
      const body: UpdateUserBody = {
        post_event_availabled: value != '-',
        manage: value == 'manage',
      }
      updateUser(user.id, body, async (success) => {
        if (success) {
          // ユーザー情報更新後の処理
          if (isMe && !body.manage) {
            // 自分自身の権限の`Manage`を外した場合はトップ画面へ遷移
            router.push('/')
          }
        } else {
          // ユーザー情報更新失敗時の処理
          // <select>の`value`を戻す
          setPermission(getPermissionStr(user))
        }
        // 状態遷移
        setUpdating(false)
      })
    },
    []
  )
  const [, doAddStar] = useAsyncFn(async (uesrId: number) => {
    addStar(uesrId, async (success, body) => {
      if (success) {
        user.star_count = body.count + 1
      }
    })
  }, [])

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <select
          className='select'
          disabled={updating || user.admin}
          value={permission}
          onChange={(e) => {
            switch (e.target.value) {
              case '-':
                doUpdateUser('-')
                break
              case 'post_event_availabled':
                doUpdateUser('post_event_availabled')
                break
              case 'manage':
                doUpdateUser('manage')
                break
              default:
                router.push('/manage')
                break
            }
          }}
        >
          <option value='-'>-</option>
          <option value='post_event_availabled'>イベント投稿</option>
          <option value='manage'>イベント投稿・ユーザー管理</option>
          <option value='' hidden>
            管理者
          </option>
        </select>
      </td>
      <td>
        <div className='flex items-center gap-4 max-w-[80px]'>
          {user.star_count}
          <div
            className='btn btn-circle btn-sm ml-auto'
            onClick={() => doAddStar(user.id)}
          >
            +
          </div>
        </div>
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
