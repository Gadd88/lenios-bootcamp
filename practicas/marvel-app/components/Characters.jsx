import fav from '../assets/fav.svg'
import styled from 'styled-components'
import { useState } from 'react'
// eslint-disable-next-line react/prop-types
export function Characters({ characters }) {

    const [modalState, setModalState] = useState(false)
    const [modalContent, setModalContent] = useState([])
    const setContent = (char) =>{
        setModalContent([char])
        setModalState(true)
        console.log(char)
    }

    const charsFav = []

    const handleFav = (char) =>{
        charsFav.push(char)
        console.log(charsFav)
    }

    return (
        <>
            {
                characters ? 
                <>
                    <ul className="characters">
                        {
                            // eslint-disable-next-line react/prop-types
                            characters.map((char)=>{
                                return (
                                    <>
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
                                    </>
                                )})
                        }
                    </ul>
                    { modalState &&
                        modalContent?.map((char)=>{
                            return(
                                <Overlay key={char.id}>
                                    <ContenedorModal>
                                        <EncabezadoModal>
                                            <h2>{char.name}</h2>
                                        </EncabezadoModal>
                                        <BotonCerrar onClick={()=>setModalState(false)}>
                                            X
                                        </BotonCerrar>
                                        <div className="content">
                                            <img
                                                src={char.poster || `${char.thumbnail.path}.${char.thumbnail.extension}`}
                                                alt="char picture"
                                                className='profileimg'
                                            />
                                            <p className='char-des'>{char.description ? char.description : 'mmm...Weird, this character has no description, sorry...'}</p>
                                        </div>
                                        <div>
                                            <h4>Comics</h4>
                                            <ul>
                                                {
                                                    char.comics?.items.map((comic, index) => {
                                                    return (
                                                        <li key={index}>{comic.name}</li>
                                                    )})
                                                }
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>Series</h4>
                                            <ul>
                                                {
                                                    char.series?.items.map((serie, index) => {
                                                    return (
                                                        <li key={index}>{serie.name}</li>
                                                    )})
                                                }
                                            </ul>
                                        </div>
                                    </ContenedorModal>   
                                </Overlay>
                            )
                        })
                    }
                </>
                    :
                    <p>No hay personajes con ese nombre</p>
            }
        </>
    )
}


const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    height: 500px;
    background: #fff;
    position: relative;
    border-radius: 15px;
    box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
    padding: 10px;
    overflow: auto;
    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            max-width: 200px;
            object-fit: cover;
            border-radius: 20px;
            margin: 5px;
        }
        .char-des{
            margin: 5px;
        }
    }
`
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #383838;
    h3{
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`

const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;
    &:hover {
        background: #f2f2f2;
    }
`