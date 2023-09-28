export interface  State {
    fromLanguage: string
    toLanguage: string
    fromText: string
    result: string
    loading: boolean
}

import { AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constants'

export type Languages = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLaguage = Languages | AutoLanguage

export type Action =
    | { type: 'INTERCHANGE_LANGUAGES'}
    | { type: 'SET_FROM_LANGUAGE', payload: string }
    | { type: 'SET_TO_LANGUAGE', payload: string }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }
