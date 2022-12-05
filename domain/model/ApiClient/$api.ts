import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './events'
import type { Methods as Methods1 } from './events/_id@number'
import type { Methods as Methods2 } from './events/_id@number/documents'
import type { Methods as Methods3 } from './events/_id@number/documents/_document_id@number'
import type { Methods as Methods4 } from './reset'
import type { Methods as Methods5 } from './users'
import type { Methods as Methods6 } from './users/_id@number'
import type { Methods as Methods7 } from './users/sign_in'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1323' : baseURL).replace(/\/$/, '')
  const PATH0 = '/events'
  const PATH1 = '/documents'
  const PATH2 = '/reset'
  const PATH3 = '/users'
  const PATH4 = '/users/sign_in'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    events: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          documents: {
            _document_id: (val3: number) => {
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
          /**
           * @returns Success
           */
          get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
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
          $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
    reset: {
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).send(),
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    users: {
      _id: (val1: number) => {
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
      sign_in: {
        /**
         * @returns Success
         */
        post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * @returns Success
         */
        $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
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
