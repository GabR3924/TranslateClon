import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useStore } from './hooks/useStore';

function App() {
  const { fromLanguage, setToLanguage } = useStore()

  return (
    <div className='App'>
      <h1>Google translate</h1>
      <button
        onClick={() => {
          setToLanguage('es')
        }}
      >
        Cambiar a español
      </button>
      {fromLanguage}
    </div>
  );
}

export default App;
