/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: Types.Name & Types.Name_contain | undefined
    status: 200
    /** Success */
    resBody: Types.EventDocument[]
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.EventDocument[]
    reqBody: Types.CreateEventDocumentBody
  }
}
