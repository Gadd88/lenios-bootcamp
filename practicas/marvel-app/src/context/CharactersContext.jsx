import { createContext, useState, useEffect } from 'react'


export const CharactersContext = createContext();



const CharactersProvider = (props) => {

    //initial state of charsFav
    let initial_favorites  = JSON.parse(localStorage.getItem('charsFav'))
    if(!initial_favorites){
        initial_favorites = []
    }

    const [modalState, setModalState] = useState(false)
    const [modalContent, setModalContent] = useState([])
    const [charsFav, setCharsFav] = useState(initial_favorites)

    useEffect(() => {
        if(initial_favorites){
            localStorage.setItem('charsFav', JSON.stringify(charsFav))
        } else {
            localStorage.setItem('charsFav', JSON.stringify([]))
        }
  }, [charsFav,initial_favorites])



  return (
    <CharactersContext.Provider value={{
        modalState,
        setModalState,
        modalContent,
        setModalContent,
        charsFav,
        setCharsFav,
    }}>
        {props.children}

    </CharactersContext.Provider>
  )
}

export default CharactersProvider