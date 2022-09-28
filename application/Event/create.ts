import { useFieldArray, useForm } from 'react-hook-form'
import { useApi } from '../ApiClient'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const useCreateEvent = () => {
  type CreateEventForm = {
    name: string
    description: string
    location: string
    datetimes: { start: string; end: string }[]
    published: boolean
  }

  const { handleSubmit, control, register } = useForm<CreateEventForm>({
    defaultValues: {
      datetimes: [
        {
          start: new Date().toISOString().slice(0, 16),
          end: new Date().toISOString().slice(0, 16),
        },
      ],
    },
  })

  const registerName = {
    ...register('name', {
      required: true,
    }),
  }
  const registerDescription = {
    ...register('description', {
      required: true,
    }),
  }
  const registerLocation = {
    ...register('location'),
  }
  const {
    fields: datetimes,
    append: appendDatetime,
    remove: removeDatetime,
  } = useFieldArray({
    name: 'datetimes',
    control,
  })
  const registerDatetimes = datetimes.map((_, index) => {
    const registerStart = {
      ...register(`datetimes.${index}.start`, {
        required: true,
        valueAsDate: true,
      }),
    }
    const registerEnd = {
      ...register(`datetimes.${index}.end`, {
        required: true,
        valueAsDate: true,
      }),
    }
    const remove = () => removeDatetime(index)
    return { registerStart, registerEnd, remove }
  })
  const registerPublished = {
    ...register('published', { value: true }),
  }

  const client = useApi(NEXT_PUBLIC_API_URL())
  const createEvent = (callback: (success: boolean) => Promise<void>) => {
    return handleSubmit(async (data) => {
      client.events
        .post({
          body: {
            name: data.name,
            description: data.description,
            location: data.location,
            datetimes: data.datetimes,
            published: data.published,
          },
        })
        .then((res) => {
          if (res.status == 201) {
            // 更新成功
            callback(true)
          } else {
            // 更新失敗
            callback(false)
          }
        })
    })()
  }

  return {
    registerName,
    registerDescription,
    registerLocation,
    registerDatetimes,
    appendDatetime,
    registerPublished,
    createEvent,
  }
}
