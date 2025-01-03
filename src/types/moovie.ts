export interface Moovies {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  page: number
  total_pages: any
}

export interface Genres {
  id: number
  name: string
}

export interface Detail {
  title: string
  status: string
  poster_path: string
  vote_average: number
  vote_count: number
  budget: number
  overview: string
  release_date: string
  spoken_languages: any
  production_companies: any
}

export interface Review {
  author: string
  created_at: string
  content: string
  author_details: any
}
