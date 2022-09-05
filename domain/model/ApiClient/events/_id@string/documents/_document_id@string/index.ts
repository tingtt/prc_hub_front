/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.EventDocument[]
  }

  patch: {
    status: 200
    /** Success */
    resBody: Types.EventDocument
    reqBody: Types.UpdateEventDocumentBody
  }

  delete: {
    status: 204
  }
}
