<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMoovieStore } from '@/stores/moovie'
import MoovieDetail from '@/components/detail/MoovieDetail.vue'

const route = useRoute()
const store = useMoovieStore()
const moovieId = ref(route.params.id as string)

onMounted(async () => {
  store.getDetailMoovie(moovieId.value)
  store.getReview(moovieId.value)
  store.getReccomendation(moovieId.value)
})
</script>

<template>
  <main>
    <MoovieDetail />
  </main>
</template>
