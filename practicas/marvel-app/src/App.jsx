import './App.css'
import logo from '../assets/marvel_logo.png'
import fav from '../assets/fav.svg'
import nav from '../components/navbar.module.css'
import searchbar from '../components/searchbar.module.css'
import lupa from '../assets/buscar.svg'
import { useRef, useEffect, useState, useCallback } from 'react';
import { Characters } from '../components/Characters';
import { useCharacters } from '../hooks/useCharacters';
import debounce from 'just-debounce-it'

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
    
    setError(null)
  }, [search])

  return { search, updateSearch, error }  
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const inputRef = useRef();
  const { characters, getChars, loading } = useCharacters({ search })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetChars = useCallback(
    debounce(search => {
      getChars({ search })
    }, 300)
    , [getChars])
  
    const handleSubmit = (e) => {
    e.preventDefault()
    getChars({ search });
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetChars({ newSearch })
  }


  return (
    <div className='page'>
      <header>
        <h1>Marvel Searcher App</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className={nav.navbar}>
            <img src={logo} alt="marvel logo" className={nav.marvel}/>
            <div className={searchbar.searchbar}>
              <img src={lupa} alt="icono lupa" className={searchbar.lupa}/>
              <input 
                type="text" 
                placeholder='Ironman, Spiderman...'
                ref={inputRef}
                value={search}
                onChange={handleChange}
                className={searchbar.search}
                />
              </div>
            <button type='submit' className='btn-search'>Buscar</button>
            <img src={fav} alt="favorito" className={nav.fav}/>
          </div>
        </form>
        {error && <p style={{ colo:'red' }}>{error}</p>}
      </header>
      <main>
        {/* Lista de personajes */}
            
        {
          loading ? <p>Loading characters... </p> : <Characters characters={characters} />
        }
      </main>
    </div>
  )
}

export default App
