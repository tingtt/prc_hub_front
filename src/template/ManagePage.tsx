import Link from 'next/link'
import React from 'react'
import { Event, User } from '../../domain/model/ApiClient/@types'
import { ButtonGroup } from '../molecules/ButtonGroup'
import { EventTable } from '../organisms/EventTable'
import { NavBar } from '../organisms/NavBar'
import { UserTable } from '../organisms/UserTable'

export const ManagePage = ({
  scope,
  users,
  events,
  enableAdimin,
}: {
  scope: 'user' | 'event'
  users: User[]
  events: Event[]
  enableAdimin: boolean
}) => {
  return (
    <div className='flex flex-col items-center'>
      <NavBar
        title={'管理者ページ'}
        trailingItems={[
          <Link href={'/'} key={'/'}>
            <button className='btn btn-ghost'>トップ</button>
          </Link>,
          <Link href={'/events'} key={'/events'}>
            <button className='btn btn-ghost'>イベント一覧</button>
          </Link>,
        ]}
      />
      <div className='max-w-sm w-full mt-4'>
        <ButtonGroup
          childs={[
            <Link href={'/manage/user'} key={'user'}>
              <button
                className={`
                  btn btn-outline no-animation
                  ${scope == 'user' && 'bg-base-content text-base-100'}
                  border border-base-content
                `}
              >
                ユーザー
              </button>
            </Link>,
            <Link href={'/manage/event'} key={'event'}>
              <button
                className={`
                  btn btn-outline no-animation
                  ${scope == 'event' && 'bg-base-content text-base-100'}
                  border border-base-content
                `}
              >
                イベント
              </button>
            </Link>,
          ]}
        />
      </div>
      {scope == 'user' && (
        <UserTable users={users} enableAdimin={enableAdimin} />
      )}
      {scope == 'event' && (
        <EventTable events={events} enableAdimin={enableAdimin} />
      )}
    </div>
  )
}
