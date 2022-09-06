/* eslint-disable */
export type Id = {
  id: string
}

export type Document_id = {
  document_id: string
}

export type Oauth_providers = {
  oauth_providers: 'github'
}

export type Line_notify_scope = {
  scope?: 'event' | 'document' | undefined
}

export type Name = {
  name?: string | undefined
}

export type Name_contain = {
  name_contain?: string | undefined
}

export type Location = {
  location?: string | undefined
}

export type Location_contain = {
  location_contain?: string | undefined
}

export type User = {
  id: string
  name: string
  email: string
  github_username?: string | undefined
  twitter_id?: string | undefined
  post_event_availabled: boolean
  admin: boolean
}

export type LoginBody = {
  email: string
  password: string
}

export type UserWithToken = {
  id: string
  name: string
  email: string
  github_username?: string | undefined
  twitter_id?: string | undefined
  post_event_availabled: boolean
  admin: boolean
  token: string
}

export type Token = {
  token: string
}

export type CreateUserBody = {
  name: string
  email: string
  password: string
  github_username?: string | undefined
  twitter_id?: string | undefined
}

export type CreateUserOverOauth2Body = {
  access_token: string
  expire_in: number
  refresh_token: string
  refresh_token_expire_in?: number | undefined
  password: string
}

export type OAuth2ConnectBody = {
  access_token: string
  refresh_token: string
  refresh_token_expire_in?: number | undefined
}

export type UpdateUserBody = {
  name?: string | undefined
  email?: string | undefined
  password?: string | undefined
  github_username?: string | undefined
  twitter_id?: string | undefined
  post_event_availabled?: boolean | undefined
  admin?: boolean | undefined
}

export type Event = {
  id: string
  title: string
  description?: string | undefined
  location?: string | undefined
  datetimes?: EventDatetime[] | undefined
  published: boolean
  completed: boolean
  documents?: EventDocument[] | undefined
}

export type EventDatetime = {
  start: string
  end: string
}

export type CreateEventBody = {
  title: string
  description?: string | undefined
  location?: string | undefined
  datetimes?: CreateEventDatetime[] | undefined
  published?: boolean | undefined
  completed?: boolean | undefined
}

export type CreateEventDatetime = {
  start: string
  end: string
}

export type UpdateEventBody = {
  title?: string | undefined
  description?: string | undefined
  location?: string | undefined
  datetimes?: CreateEventDatetime[] | undefined
  published?: boolean | undefined
  completed?: boolean | undefined
}

export type EventDocument = {
  id: string
  name: string
  url: string
}

export type CreateEventDocumentBody = {
  name: string
  url: string
}

export type UpdateEventDocumentBody = {
  name?: string | undefined
  url?: string | undefined
}
