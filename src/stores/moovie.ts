import { defineStore } from 'pinia'
import type { Moovies } from '@/types/moovie'

export const useMoovieStore = defineStore('moovie', {
  state: () => ({
    runtimeConfig: import.meta.env,
    listMoovie: <Moovies>[],
    page: '',
    totalPage: '',
  }),
  actions: {
    async getMoovie(page: string) {
      try {
        const response = await fetch(
          `${this.runtimeConfig.VITE_BASE_API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${this.runtimeConfig.VITE_BASE_API_TOKEN}`,
            },
          },
        )
        const result = await response.json()
        this.listMoovie.push(...result.results)
        this.page = result.page
        this.totalPage = result.total_pages
      } catch (error) {
        console.log('ERROR')
      }
    },
  },
})
