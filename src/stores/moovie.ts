import { defineStore } from 'pinia'
import type { Moovies, Genres, Detail, Review } from '@/types/moovie'

export const useMoovieStore = defineStore('moovie', {
  state: () => ({
    runtimeConfig: import.meta.env,
    listMoovie: [] as Moovies[],
    page: '',
    totalPage: '',
    sort_by: '',
    genres: '',
    listGenres: [] as Genres[],
    listReccomendation: [] as Moovies[],
    detailMoovie: {} as Detail,
    listReview: [] as Review[],
    listTrending: [] as Moovies[],
    watchlistMovies: [] as Moovies[],
  }),
  actions: {
    async getMoovie(data: any) {
      try {
        this.genres = data.genres
        if (data.genres !== undefined) {
          this.genres = data.genres
        }
        if (data.sort_by !== undefined) {
          this.page = '1'
          this.sort_by = data.sort_by
        }
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${data.page}&sort_by=${this.sort_by}${this.genres ? `&with_genres=${this.genres}` : ''}`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        const result = await response.json()
        if (data.page === 1) {
          this.listMoovie = result.results
          this.sort_by = data.sort_by
        } else {
          this.listMoovie.push(...result.results)
        }
        this.page = result.page
        this.totalPage = result.total_pages
      } catch (error) {
        console.log('ERROR')
      }
    },

    async getGenres() {
      try {
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/genre/movie/list?language=en`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        const result = await response.json()
        this.listGenres = result.genres
      } catch (error) {
        console.log('ERROR')
      }
    },

    async getReccomendation(slug: string) {
      try {
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/movie/${slug}/recommendations?language=en&page=1`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        const result = await response.json()
        this.listReccomendation = result.results
      } catch (error) {
        console.log('ERROR')
      }
    },

    async getDetailMoovie(slug: string) {
      try {
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/movie/${slug}?language=en-US`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        const result = await response.json()
        this.detailMoovie = result
      } catch (error) {
        console.log('ERROR')
      }
    },

    async getReview(slug: string) {
      try {
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/movie/${slug}/reviews?language=en-US&page=1`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        const result = await response.json()
        this.listReview = result.results
      } catch (error) {
        console.log('ERROR')
      }
    },

    async getTrending() {
      try {
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/trending/movie/day?language=en-US`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        const result = await response.json()
        this.listTrending = result.results
      } catch (error) {
        console.log('ERROR')
      }
    },

    async postWatchList(payload: any) {
      try {
        console.log('dddd', payload)
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/account/21594197/watchlist`,
          {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
            body: JSON.stringify(payload),
          },
        )
        const result = await response.json()
        if (result.success) {
          this.getWatchlistMovies()
        }
      } catch (error) {
        console.log('ERROR')
      }
    },

    async getWatchlistMovies() {
      try {
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/account/21594197/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        const result = await response.json()
        this.watchlistMovies = result.results
      } catch (error) {
        console.log('ERROR')
      }
    },

    async getSuggestion(payload: string) {
      try {
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/search/movie?query=${payload}&include_adult=false&language=en-US&page=1`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        return response.json()
      } catch (error) {
        console.log('ERROR')
      }
    },
  },
})
