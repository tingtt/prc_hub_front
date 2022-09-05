/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    query?: Types.Name & Types.Name_contain & Types.Location & Types.Location_contain | undefined
    status: 200
    /** Success */
    resBody: Types.Event[]
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.Event
    reqBody: Types.CreateEventBody
  }
}
