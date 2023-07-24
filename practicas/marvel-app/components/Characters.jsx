export function Characters({ characters }) {

    return (
        <>
            {
                characters ? 
                    <ul>
                        {
                            characters.map((char)=>{
                                return (
                                    <li key={char.id}>
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
