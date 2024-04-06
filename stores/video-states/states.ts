import type { Video } from "@/interfaces/video.interface";

export const useVideoStore = defineStore('favoritos', {
  state: ()  => ({
    favoritos: ref<Video[]>([])
  }),
  getters: {
    getFavoritos(state: { favoritos: Video[] }) {
      return state.favoritos
    }
  },
  actions: {
    adicionarFavorito(video: Video) {
      if (!this.favoritos.some((v: Video) => v.id === video.id)) {
        this.favoritos.push(video);
      }
    },
    deletarFavorito(id: number) {
      this.favoritos = this.favoritos.filter((v: Video) => v.id !== id);
    },
  },
})