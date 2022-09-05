/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.User[]
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.UserWithToken
    reqBody: Types.CreateUserBody
  }

  /** `user.name: admin`は削除不可 */
  delete: {
    status: 204
  }
}
