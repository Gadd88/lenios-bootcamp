import { useState, useEffect } from "react";
export function useCharacters() {
  
    const [characters, setCharacters] = useState([]);
    
    const mappedChars = characters.map((char) => ({
      id: char.id,
      name: char.name,
      poster: `${char.thumbnail.path}.${char.thumbnail.extension}`
    }))
    
    useEffect(() => {
      fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6bff9b32ac69d54beea1d9ba1e17f5af&hash=bd52789632bd7b951b88f9bbf58004ef')
        .then(res => res.json())
        .then(data => setCharacters(data.data.results))
    }, [])
  
    return { characters: mappedChars }
}
