import { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Action, type State } from './types.d';

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

function App() {
  const [{fromLanguage}, dispatch] = useReducer(reducer, initialState);

  console.log({fromLanguage})

  return (
    <div className='App'>
      <h1>Google translate</h1>
      <button
        onClick={() => {
          dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' });
        }}
      >
        Cambiar a español
      </button>
    </div>
  );
}

export default App;
