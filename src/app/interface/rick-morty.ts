export interface RickMorty {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: RickMortyOrigin,
  location: RickMortyLocation,
  image: string,
  episode: string,
  url: string,
  created: string
}

interface RickMortyLocation {
  name: string,
  url: string
}

interface RickMortyOrigin {
  name: string,
  url: string
}
