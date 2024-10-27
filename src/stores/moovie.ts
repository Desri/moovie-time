import { defineStore } from 'pinia'
import type { Moovies } from '@/types/moovie'

export const useMoovieStore = defineStore('moovie', {
  state: () => ({
    runtimeConfig: import.meta.env,
    listMoovie: [] as Moovies[],
    page: '',
    totalPage: '',
    sort_by: '',
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
  },
})
