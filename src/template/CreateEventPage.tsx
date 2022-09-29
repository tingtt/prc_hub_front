import { useRouter } from 'next/router'
import { useAsyncFn } from 'react-use'
import { useCreateEvent } from '../../application/Event/create'
import { ButtonPrimary } from '../atoms/ButtonPrimary'
import { Checkbox } from '../atoms/Checkbox'
import { Input } from '../atoms/Input'
import { TextArea } from '../atoms/TextArea'

export const CreateEventPage = () => {
  const router = useRouter()

  const {
    registerName,
    registerDescription,
    registerLocation,
    registerDatetimes,
    appendDatetime,
    registerPublished,
    createEvent,
  } = useCreateEvent()

  const [_, doCreateEvent] = useAsyncFn(async () => {
    await createEvent(async (success) => {
      if (success) {
        router.push('/events')
      }
    })
  }, [])

  return (
    <form
      method='post'
      className='flex flex-col items-center w-full'
      onSubmit={(e: { preventDefault: () => void }) => {
        // デフォルトのsubmitを無効化
        e.preventDefault()
        // イベント追加リクエスト
        doCreateEvent()
      }}
    >
      <div className='w-full max-w-lg'>
        <Input label={'イベント名'} {...registerName} />
      </div>
      <div className='w-full max-w-lg mt-2'>
        <TextArea label={'説明文'} rows={5} {...registerDescription} />
      </div>
      <div className='w-full max-w-lg mt-2'>
        <Input label={'場所'} {...registerLocation} />
      </div>
      <table className='table w-full max-w-lg mt-4'>
        <thead>
          <tr>
            <th className='dark:bg-neutral'>開始日時</th>
            <th className='dark:bg-neutral'>終了日時</th>
            <th className='dark:bg-neutral'></th>
          </tr>
        </thead>
        <tbody>
          {registerDatetimes.map(
            ({ registerStart, registerEnd, remove }, index) => {
              return (
                <tr key={index}>
                  <td className='border border-primary'>
                    <input
                      type='datetime-local'
                      className='bg-base-100 dark:gray-date-picker'
                      {...registerStart}
                    />
                  </td>
                  <td className='border-y border-r border-primary'>
                    <input
                      type='datetime-local'
                      className='bg-base-100 dark:gray-date-picker'
                      {...registerEnd}
                    />
                  </td>
                  <td className='border-y border-r border-primary'>
                    <button
                      onClick={remove}
                      className={`
                        flex items-center
                        ${index > 0 ? 'visible' : 'invisible'}
                        fill-base-content
                      `}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z' />
                      </svg>
                    </button>
                  </td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
      <div className='w-full max-w-lg mt-2 flex justify-end'>
        <button
          className='btn btn-sm btn-primary'
          onClick={() =>
            appendDatetime({
              start: new Date().toISOString().slice(0, 16),
              end: new Date().toISOString().slice(0, 16),
            })
          }
        >
          <svg
            className='mr-1'
            width='12'
            height='12'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='black' />
          </svg>
          日時を追加
        </button>
      </div>
      <div className='w-full max-w-lg mt-4'>
        <Checkbox label={'公開'} {...registerPublished} />
      </div>
      <div className='w-full max-w-lg mt-4 flex justify-end'>
        <div className='w-max'>
          <ButtonPrimary type='submit'>登録</ButtonPrimary>
        </div>
      </div>
    </form>
  )
}
