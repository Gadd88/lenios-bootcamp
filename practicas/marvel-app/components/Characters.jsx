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
                                            src={char.poster}
                                            alt="Character Image"
                                        />
                                        <h3>{char.name}</h3>
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
