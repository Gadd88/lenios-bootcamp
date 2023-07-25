import './App.css'
import { useRef, useEffect, useState } from 'react';
import { Characters } from '../components/Characters';
import { useCharacters } from '../hooks/useCharacters';


function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    
    if (search === ''){
      setError('No se puede buscar un personaje con la entrada de texto vacia')
      return
    }
    if (search.match(/^\d+$/)){
      setError('No se puede buscar un personaje con un número')
      return
    }
    if (search.length<3){
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }  
}



function App() {
  const { characters } = useCharacters()
  const { search, updateSearch, error } = useSearch()
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    // const inputValue = inputRef.current.value
    console.log(search)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Marvel Searcher App</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Ironman, Spiderman...'
            ref={inputRef}
            value={search}
            onChange={handleChange}
            />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ colo:'red' }}>{error}</p>}
      </header>
      <main>
        {/* Lista de personajes */}
        <Characters characters={characters}/>
      </main>
    </div>
  )
}

export default App
