/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.Event
  }

  patch: {
    status: 200
    /** Success */
    resBody: Types.Event
    reqBody: Types.UpdateEventBody
  }

  delete: {
    status: 204
  }
}
