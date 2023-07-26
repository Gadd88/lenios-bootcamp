import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"

const Modal = ({ children, modalState, setModalState }) => {
    const [character, setCharacter] = useState();
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${name}&apikey=6bff9b32ac69d54beea1d9ba1e17f5af&hash=bd52789632bd7b951b88f9bbf58004ef`)
            .then(res => res.json())
            .then(info => setCharacter(info.data.results[0]))
    }, [name])

    

    return (
        <>
            {modalState &&
                <Overlay key={character.id}>
                    <ContenedorModal>
                        <EncabezadoModal>
                            {/* <h2>{character.name}</h2> */}
                        </EncabezadoModal>
                        <BotonCerrar onClick={()=>setModalState(false)}>
                            X
                        </BotonCerrar>
                        {/* <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt="character picture"
                            className='profileimg'
                        />
                            <p>{character.description}</p> */}
                    </ContenedorModal>   
                </Overlay>
            }
        </>
    )
}

export default Modal


const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 15px;
    box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
    padding: 20px;
`
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
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