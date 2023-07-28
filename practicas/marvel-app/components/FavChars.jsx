import styled from 'styled-components'

const FavChars = ( { charsFav, setCharsFav } ) => {


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
        <Button onClick={()=> setCharsFav([])}>Clear</Button>
    </FavContainer>
  )
}

export default FavChars

const FavContainer = styled.div`
    background: #fff;
    min-height: 250px;
    width: 500px;
    border-radius: 20px;
    padding: 0 0 0 10px;
    overflow: auto;
    position: fixed;
    top: 150px;
    margin: auto;
    display: flex;
    box-sizing: border-box;
    align-items: flex-start;
    flex-direction: column;
    border: 1px solid red;
    z-index: 10;
    .cards-container{
        display: flex;
        flex-wrap: wrap;
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