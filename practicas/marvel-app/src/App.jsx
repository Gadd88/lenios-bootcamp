
import { Characters } from '../components/Characters';
import './App.css'
import { useCharacters } from '../hooks/useCharacters';


function App() {
  const { characters: mappedChars } = useCharacters()

  return (
    <div className='page'>
      <header>
        <h1>Marvel Searcher App</h1>
        <form action="" className="form">
          <input 
            type="text" 
            placeholder='Ironman, Spiderman...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {/* Lista de personajes */}
        <Characters characters={mappedChars}/>
      </main>
    </div>
  )
}

export default App
