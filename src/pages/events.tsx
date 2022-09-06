import type { NextPage } from 'next'
import { getEvents } from '../../application/ApiClient/getEvents'

const Events: NextPage = () => {
  const { data: events } = getEvents()()
  return (
    <div>
      {(events ?? []).map((event) => {
        return (
          <div key={`event-${event.id}`}>
            <div className='my-7 mx-auto w-full max-w-[800px] h-0.5 bg-base-content opacity-20'></div>
            <div className='flex justify-center mx-auto max-w-[800px]'>
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
                    {event.title}
                  </div>
                  <div className='mt-1 text-lg'>藤島 拓大</div>
                  {/* 日時の表示 */}
                  <div className='flex mt-1'>
                    {(event.datetimes ?? []).map(({ start, end }) => {
                      const date = new Date(start)
                      return (
                        <div
                          key={`dt-${start}`}
                          className='btn btn-xs btn-info rounded-none mr-2'
                        >
                          {`${date.getMonth() + 1}月${date.getDate()}日`}
                        </div>
                      )
                    })}
                  </div>
                  <div className='mt-3 text-sm'>&nbsp;{event.description}</div>
                </div>
                <div className='flex mt-4'>
                  <div className='btn btn-sm btn-outline btn-info text-[0.95rem] fill-info hover:fill-info-content rounded-none'>
                    資料を見る
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 48'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M6.00035 0L0.360352 5.64L18.6804 24L0.360352 42.36L6.00035 48L30.0004 24L6.00035 0Z' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Events
