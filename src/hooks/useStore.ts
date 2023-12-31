import { Action, FromLaguage, Languages, type State } from '../types.d';
import { useReducer } from 'react';


const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false,
  };
  
  function reducer(state: State, action: Action) {
    const { type } = action;
  
    if (type === 'INTERCHANGE_LANGUAGES') {
      if (state.fromLanguage === 'auto') return state

      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage, 
      };
    }
  
    if (type === 'SET_FROM_LANGUAGE') {
      return {
        ...state,
        fromLanguage: action.payload,
      };
    }
  
    if (type === 'SET_TO_LANGUAGE') {
      return {
        ...state,
        toLanguage: action.payload,
      };
    }
  
    if (type === 'SET_FROM_TEXT') {
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: '',
      };
    }
  
    if (type === 'SET_RESULT') {
      return {
        ...state,
        loading: true,
        result: action.payload,
      };
    }
  
    return state; // Return the state as is if no action type matches
  }

  export function useStore () {

    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState);

    const interchangeLanguage = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }

    const setFromLanguage = (payload: FromLaguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }

    const setToLanguage = (payload: Languages) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }

    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }

    const setResult = (payload: string) => {
        dispatch({ type: 'SET_RESULT', payload })
    }

    return{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguage,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }

  }