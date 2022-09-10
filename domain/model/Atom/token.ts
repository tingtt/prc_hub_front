import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import React from 'react'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const sessionState = atom<string | null>({
  key: 'session',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const useSessionState = () => {
  return useRecoilValue(sessionState)
}

export const useSessionMutations = () => {
  const setState = useSetRecoilState(sessionState)

  const setSession = React.useCallback(
    (token: string) => setState(token),
    [setState]
  )

  return { setSession }
}
