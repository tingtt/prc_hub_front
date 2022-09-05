import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './events'
import type { Methods as Methods1 } from './events/_id@string'
import type { Methods as Methods2 } from './events/_id@string/documents'
import type { Methods as Methods3 } from './events/_id@string/documents/_document_id@string'
import type { Methods as Methods4 } from './events/_id@string/webhook/line_notify'
import type { Methods as Methods5 } from './users'
import type { Methods as Methods6 } from './users/_id@string'
import type { Methods as Methods7 } from './users/oauth2/_oauth_providers'
import type { Methods as Methods8 } from './users/oauth2/_oauth_providers/register'
import type { Methods as Methods9 } from './users/sign_in'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1323' : baseURL).replace(/\/$/, '')
  const PATH0 = '/events'
  const PATH1 = '/documents'
  const PATH2 = '/webhook/line_notify'
  const PATH3 = '/users'
  const PATH4 = '/users/oauth2'
  const PATH5 = '/register'
  const PATH6 = '/users/sign_in'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    events: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          documents: {
            _document_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH1}/${val3}`

              return {
                /**
                 * @returns Success
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * @returns Success
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                /**
                 * @returns Success
                 */
                patch: (option: { body: Methods3['patch']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods3['patch']['resBody'], BasicHeaders, Methods3['patch']['status']>(prefix, prefix3, PATCH, option).json(),
                /**
                 * @returns Success
                 */
                $patch: (option: { body: Methods3['patch']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods3['patch']['resBody'], BasicHeaders, Methods3['patch']['status']>(prefix, prefix3, PATCH, option).json().then(r => r.body),
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            /**
             * @returns Success
             */
            get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * @returns Success
             */
            $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          webhook: {
            line_notify: {
              /**
               * アンケートURL・資料URLの送信。
               */
              post: (option?: { query?: Methods4['post']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send(),
              /**
               * アンケートURL・資料URLの送信。
               */
              $post: (option?: { query?: Methods4['post']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send().then(r => r.body),
              $path: (option?: { method: 'post'; query: Methods4['post']['query'] } | undefined) =>
                `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Success
           */
          patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns Success
           */
          $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @returns Success
       */
      get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns Success
       */
      $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
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
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    users: {
      _id: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Success
           */
          patch: (option: { body: Methods6['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods6['patch']['resBody'], BasicHeaders, Methods6['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns Success
           */
          $patch: (option: { body: Methods6['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods6['patch']['resBody'], BasicHeaders, Methods6['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * `user.name: admin`は削除不可
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * `user.name: admin`は削除不可
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      oauth2: {
        _oauth_providers: (val2: number | string) => {
          const prefix2 = `${PATH4}/${val2}`

          return {
            register: {
              /**
               * @returns Created
               */
              post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option).json(),
              /**
               * @returns Created
               */
              $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH5}`
            },
            post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, prefix2, POST, option).send(),
            $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, prefix2, POST, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      },
      sign_in: {
        /**
         * @returns Success
         */
        post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH6, POST, option).json(),
        /**
         * @returns Success
         */
        $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH6}`
      },
      /**
       * @returns Success
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * @returns Success
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * @returns Created
       */
      post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * @returns Created
       */
      $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      /**
       * `user.name: admin`は削除不可
       */
      delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, PATH3, DELETE, option).send(),
      /**
       * `user.name: admin`は削除不可
       */
      $delete: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, PATH3, DELETE, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
