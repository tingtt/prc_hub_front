/* eslint-disable */
export type Id = {
  id: number
}

export type Document_id = {
  document_id: number
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

export type Embed = {
  embed?: ('user' | 'documents')[] | undefined
}

export type User = {
  id: number
  name: string
  email: string
  github_username?: string | undefined
  twitter_id?: string | undefined
  star_count?: number | undefined
  post_event_availabled: boolean
  manage: boolean
  admin: boolean
}

export type LoginBody = {
  email: string
  password: string
}

export type UserWithToken = {
  id: number
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

export type UpdateUserBody = {
  name?: string | undefined
  email?: string | undefined
  password?: string | undefined
  github_username?: string | undefined
  twitter_id?: string | undefined
  post_event_availabled?: boolean | undefined
  manage?: boolean | undefined
}

export type Event = {
  id: number
  name: string
  user?: User | undefined
  description?: string | undefined
  location?: string | undefined
  datetimes: EventDatetime[]
  published: boolean
  completed: boolean
  documents?: EventDocument[] | undefined
}

export type EventDatetime = {
  start: string
  end: string
}

export type CreateEventBody = {
  name: string
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
  name?: string | undefined
  description?: string | undefined
  location?: string | undefined
  datetimes?: CreateEventDatetime[] | undefined
  published?: boolean | undefined
  completed?: boolean | undefined
}

export type EventDocument = {
  id: number
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
