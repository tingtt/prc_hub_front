import { Event } from '../../domain/model/ApiClient/@types'
import { ButtonInfoOutlinedSM } from '../atoms/ButtonInfoOutlinedSM'
import { InfoLabel } from '../atoms/InfoLabel'

export const EventListItem = ({ event }: { event: Event }) => {
  return (
    <div>
      <div className='flex justify-center mx-auto'>
        {/* TODO: イベント画像 */}
        {/* <div className='w-1/4 min-w-[200px] max-w-[540px]'>
          <Image
            src='/svg/human_sample1.png'
            width={540}
            height={405}
            objectFit='contain'
            alt='bg_main'
          />
        </div> */}
        <div className='pl-5 w-full'>
          <div>
            <div className='inset-x-0 top-0 text-3xl font-bold'>
              {event.name}
            </div>
            <div className='mt-1 text-lg'>
              {event.user?.name ?? <>&nbsp;</>}
            </div>
            {/* 日時の表示 */}
            <div className='flex mt-1'>
              {(event.datetimes ?? []).map(({ start, end }) => {
                const date = new Date(start)
                return (
                  <div key={`dt-${start}`} className='mr-2'>
                    <InfoLabel>
                      {`${date.getMonth() + 1}月${date.getDate()}日`}
                    </InfoLabel>
                  </div>
                )
              })}
            </div>
            <div className='mt-6 text-sm'>
              {event.description?.split('\\n').map((str) => {
                return (
                  <div key={`event-${event.id}-${str}`}>
                    {str}
                    <br />
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex mt-4'>
            {(event.documents ?? []).map((document) => {
              return (
                <div key={document.id} className='mr-3'>
                  <ButtonInfoOutlinedSM
                    onClick={() => {
                      // 新規タブでドキュメントを表示
                      window.open(document.url)
                    }}
                  >
                    {document.name}を見る
                    <svg
                      width='16'
                      height='12'
                      viewBox='0 0 20 48'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M6.00035 0L0.360352 5.64L18.6804 24L0.360352 42.36L6.00035 48L30.0004 24L6.00035 0Z' />
                    </svg>
                  </ButtonInfoOutlinedSM>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
