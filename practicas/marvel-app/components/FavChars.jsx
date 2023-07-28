import styled from 'styled-components'

const FavChars = ( { charsFav, setCharsFav, setShowFav } ) => {

    const resetCharsFav = () => {
        setCharsFav([])
        setShowFav(false)
    }

  return (
    <FavContainer>
        <h2>Favorites</h2>
        <div className='cards-container'>
            {
                charsFav ?
                    charsFav.map((item)=>{
                        return(
                            <>
                                <Card key={item.id}>
                                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="character poster" />
                                    <h3>{item.name}</h3>
                                </Card> 
                            </>
                        )}
                    ) : 'No Favs'
            }
        </div>
        <Button onClick={()=> resetCharsFav()}>Clear</Button>
    </FavContainer>
  )
}

export default FavChars

const FavContainer = styled.div`
    background: #fff;
    min-height: 250px;
    width: 80%;
    border-radius: 20px;
    padding: 0 0 0 10px;
    overflow: auto;
    position: fixed;
    top: 150px;
    left: 75px;
    display: flex;
    box-sizing: border-box;
    align-items: flex-start;
    flex-direction: column;
    border: 2px solid #bbb;
    z-index: 5;
    .cards-container{
        display: flex;
        flex-wrap: wrap;
        margin-top: 5px;
    }
    @media screen and (max-width: 400px){
        width: 95%;
        padding: 5px;
        top: 150px;
        left: 5px;
        margin: 5px;
    }
    @media screen and (min-width: 900px){
        width: 90%;
    }
    
`

const Card = styled.div`
    width: 150px;
    height: 200px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    transition: all .2s ease;
    margin-top: -20px;
    img{
        width: 100px;
        border-radius: 20px;
    }
    h3{
        white-space: nowrap;
        font-size: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media screen and (max-width: 400px){
        width: 110px;
        padding: 0;
        height: 120px;
        img{
            width: 80%;
            height: 70%;
        }
        h3{
            margin-top: -1px;
        }
    }
    @media screen and (min-width: 401px){
        width: 200px;
        img{
            width: 80%;
            height: 70%;
        }
        h3{
            font-size: 16px;
            margin-top: -2px;
        }
    }
    
`

const Button = styled.button`
    padding: 10px;
    width: 100px;
    border-radius: 20px;
    background: transparent;
    border: 1px solid #bbb;
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 10px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
    &:hover{
        background-color: rgb(192, 62, 32);
        color: #fff;
    }
    &:active{
        top: 27px;
    }
`