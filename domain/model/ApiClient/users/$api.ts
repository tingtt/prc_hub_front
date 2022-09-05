import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'
import type { Methods as Methods2 } from './oauth2/_oauth_providers'
import type { Methods as Methods3 } from './oauth2/_oauth_providers/register'
import type { Methods as Methods4 } from './sign_in'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1323' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const PATH1 = '/users/oauth2'
  const PATH2 = '/register'
  const PATH3 = '/users/sign_in'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns Success
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Success
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns Success
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * @returns Success
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        /**
         * `user.name: admin`は削除不可
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * `user.name: admin`は削除不可
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    oauth2: {
      _oauth_providers: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          register: {
            /**
             * @returns Created
             */
            post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          },
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, prefix1, POST, option).send(),
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, prefix1, POST, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    sign_in: {
      /**
       * @returns Success
       */
      post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * @returns Success
       */
      $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    /**
     * @returns Success
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns Success
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * @returns Created
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns Created
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    /**
     * `user.name: admin`は削除不可
     */
    delete: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send(),
    /**
     * `user.name: admin`は削除不可
     */
    $delete: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
