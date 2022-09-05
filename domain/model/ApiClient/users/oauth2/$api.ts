import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './_oauth_providers'
import type { Methods as Methods1 } from './_oauth_providers/register'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:1323' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users/oauth2'
  const PATH1 = '/register'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    _oauth_providers: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        register: {
          /**
           * @returns Created
           */
          post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, prefix0, POST, option).send(),
        $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, prefix0, POST, option).send().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
