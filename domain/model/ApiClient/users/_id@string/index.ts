/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.User
  }

  patch: {
    status: 200
    /** Success */
    resBody: Types.UserWithToken
    reqBody: Types.UpdateUserBody
  }

  /** `user.name: admin`は削除不可 */
  delete: {
    status: 204
  }
}
