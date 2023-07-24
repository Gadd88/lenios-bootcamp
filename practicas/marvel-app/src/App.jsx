import { useState, useEffect } from 'react';
import './App.css'
//import apiResponse from './mocks/apiResponse.json'

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6bff9b32ac69d54beea1d9ba1e17f5af&hash=bd52789632bd7b951b88f9bbf58004ef')
      .then(res => res.json())
      .then(data => setCharacters(data.data.results))
  }, [])
  

  //|const characters = apiResponse.data.results
  // const hasChars = characters?.length > 0  
  
  return (
    <>
      <header className='page'>
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
        {
          characters ?  
          (
              <ul>
                {
                  characters.map((char) => {
                    return (
                      <li key={char.id}>
                        <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="" />
                        <h3>{char.name}</h3>
                      </li>
                    )
                  })
                }
              </ul>
            )  
          : (
              <p>No se encuentran resultados</p>
            )
        }
      </main>
    </>
  )
}

export default App
