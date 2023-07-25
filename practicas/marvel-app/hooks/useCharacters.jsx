import { useState, useEffect } from "react";
import { searchCharacters } from './searchCharacters'


export function useCharacters({ search }) {
    const [characters, setCharacters] = useState([]); 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getChars = async () => {    
        try {
            setLoading(true)
            setError(null)
            const newCharacters = await searchCharacters( {search })
            setCharacters(newCharacters)
        } catch (e){
            setError(e.message)
        } finally {
            setLoading(false);
            console.log(error)
        }
        
    }

    useEffect(() => {
        fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6bff9b32ac69d54beea1d9ba1e17f5af&hash=bd52789632bd7b951b88f9bbf58004ef')
        .then(res => res.json())
        .then(data => setCharacters(data.data.results))
    }, [])

    return { characters, getChars, loading }
}


// 