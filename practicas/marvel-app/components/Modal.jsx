import styled from 'styled-components'
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect } from 'react'

const Modal = ({modalContent, modalState, setModalState}) => {
    
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
            {
                modalState &&
                    modalContent?.map(char => (
                        <Overlay key={char.id}>
                            <AnimatePresence mode='wait'>
                                <ContenedorModal 
                                    as={motion.div} drag
                                    initial={{scale:0.5, opacity: 0}}
                                    animate={{scale:1, opacity: 1}}
                                    >
                                    <EncabezadoModal>
                                        <h2>{char.name}</h2>
                                    </EncabezadoModal>
                                    <BotonCerrar 
                                        onClick={()=>setModalState(false)}>
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
                            </AnimatePresence>
                        </Overlay>
                        )
                    )
            }
        </>
    )
}


export default Modal

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    ::-webkit-scrollbar{
        display:none;
    }
`;

const ContenedorModal = styled.div`
    width: 500px;
    height: 500px;
    background: #fff;
    position: relative;
    border-radius: 15px;
    box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
    padding: 10px 10px 0 10px;
    overflow: auto;
    z-index: 5;
    transition: all .3s ease;
    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            max-width: 200px;
            object-fit: cover;
            border-radius: 20px;
        }
        .char-des{
            margin: 5px;
            width: 50%;
        }
    }
    @media screen and (max-width: 500px){
        width: 90%;
        height: 400px;
        .content{
            img{
                width: 40%;
            }
        }
    }
`
const EncabezadoModal = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    margin-top: -10px;
    margin-bottom: 5px;
    h3{
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`

const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: #fff;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    border: 1px solid #bbb;
    color: #1766DC;
    &:hover {
        background: #f2f2f2;
    }
`