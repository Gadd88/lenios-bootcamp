import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './charpage.module.css';

const CharPage = () => {
    const { name } = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${name}&apikey=6bff9b32ac69d54beea1d9ba1e17f5af&hash=bd52789632bd7b951b88f9bbf58004ef`)
            .then(res => res.json())
            .then(info => setCharacter(info.data.results[0]))
    }, [name])
    

  return (
    (!character) ? 'Not Found' : 
        <div
            className={styles.profile}
            key={character.id}
        >   
            <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="character picture"
                className={styles.profileimg}
            />
            <div className={styles.title}>
                <h3>{character.name}</h3>
                <p>{character.description}</p>
            </div>
        
        </div>
  )
};

export default CharPage;