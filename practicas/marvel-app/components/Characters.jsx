import fav from '../assets/fav.svg'
import { useEffect } from 'react'
import Modal from './Modal'

// eslint-disable-next-line react/prop-types
export function Characters({ characters, charsFav, setCharsFav, setModalContent, setModalState, modalContent, modalState }) {

    const setContent = (char) =>{
        setModalContent([char])
        setModalState(true)
    }

    const handleFav = (char) =>{
        if(charsFav.find(item => item === char)) return
        setCharsFav([...charsFav, char])
    }

    useEffect(() => {
        const bodyStyle = document.body.style
        modalState 
            ? (
                bodyStyle.overflowY = 'hidden'
                )
            : bodyStyle.overflowY = 'auto'
    }, [modalState])
    
    return (
        <>
            <ul className="characters">
                {
                    characters ? 
                    // eslint-disable-next-line react/prop-types
                        characters.map((char)=>(
                                <li key={char.id} className='character'>
                                    <img
                                        src={char.poster || `${char.thumbnail.path}.${char.thumbnail.extension}`}
                                        alt="Character Image"
                                        className='profile-poster'
                                        onClick={()=>setContent(char)}
                                    />
                                    <h3 className='profile-name'>{char.name}</h3>
                                    <img src={fav} alt="star" className='fav-icon' onClick={()=>handleFav(char)}/>
                                </li>
                            )) : null
                }
            </ul>
            <Modal modalContent={modalContent} modalState={modalState} setModalState={setModalState}/>
        </>
    )
}