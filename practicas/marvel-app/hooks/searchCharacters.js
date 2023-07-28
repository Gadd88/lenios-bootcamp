export const searchCharacters = async ({ search }) => {
    if ( search === '' ) return null

    try {
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=6bff9b32ac69d54beea1d9ba1e17f5af&hash=bd52789632bd7b951b88f9bbf58004ef`)
        const json = await response.json()
        const characters = json.data.results
        

        return characters?.map((char) => ({
            id: char.id,
            name: char.name,
            poster: `${char.thumbnail.path}.${char.thumbnail.extension}`
          }))
    } catch (e) {
        throw new Error('Error searching movies')
    }
}