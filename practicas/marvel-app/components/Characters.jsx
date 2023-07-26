import fav from '../assets/fav.svg'
// eslint-disable-next-line react/prop-types
export function Characters({ characters }) {

    return (
        <>
            {
                characters ? 
                    <ul className="characters">
                        {
                            // eslint-disable-next-line react/prop-types
                            characters.map((char)=>{
                                return (
                                    <li key={char.id} className='character'>
                                        <img
                                            src={char.poster || `${char.thumbnail.path}.${char.thumbnail.extension}`}
                                            alt="Character Image"
                                            className='profile-poster'
                                        />
                                        <h3 className='profile-name'>{char.name}</h3>
                                        <img src={fav} alt="star" className='fav-icon'/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    :
                    <p>No hay personajes con ese nombre</p>
            }
        </>
    )
}
