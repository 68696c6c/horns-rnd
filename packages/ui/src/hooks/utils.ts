import { Dispatch, SetStateAction } from 'react'

export type DispatcherResult<T> = [T, Dispatch<SetStateAction<T>>]
