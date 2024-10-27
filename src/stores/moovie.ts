import { defineStore } from 'pinia'
import type { Moovies, Genres, Detail } from '@/types/moovie'

export const useMoovieStore = defineStore('moovie', {
  state: () => ({
    runtimeConfig: import.meta.env,
    listMoovie: [] as Moovies[],
    page: '',
    totalPage: '',
    sort_by: '',
    listGenres: [] as Genres[],
    listReccomendation: [] as Moovies[],
    detailMoovie: {} as Detail,
  }),
  actions: {
    async getMoovie(data: any) {
      try {
        if (data.sort_by !== undefined) {
          this.page = '1'
          this.sort_by = data.sort_by
        }
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${data.page}&sort_by=${this.sort_by}`,
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
  },
})
