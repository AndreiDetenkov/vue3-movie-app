import { onMounted, ref } from 'vue'
import { useAxios } from '@vueuse/integrations/useAxios'
import { HTTP_METHOD, HTTP_URL } from '@/api/types'
import type { MovieInterface } from '@/components/shared/card/types'

export function useMovie() {
  const movies = ref<{ [key: string]: MovieInterface[] }>({
    popular: [],
    topRated: [],
  })

  onMounted(() => {
    getAllMovies()
  })

  const getAllMovies = async () => {
    const promises = [
      getMovies(HTTP_URL.popularMovie, HTTP_METHOD.GET),
      getMovies(HTTP_URL.topRatedMovie, HTTP_METHOD.GET),
    ]
    const [popular, topRated] = await Promise.all(promises)
    movies.value.popular = popular
    movies.value.topRated = topRated
  }

  const getMovies = async (
    url: string,
    method: string
  ): Promise<MovieInterface[]> => {
    const { data } = await useAxios(url, { method })
    const result = data.value?.results
    return result.length ? result : []
  }

  return {
    movies,
  }
}
