import type { Video } from "@/interfaces/video.interface";


// FORMA ANTIGA DE UTILIZAR ESTADOS REATIVOS
// export const useVideoStore = defineStore('favoritos', {
//   state: ()  => ({
//     favoritos: ref<Video[]>([])
//   }),
//   persist: {
//     storage: persistedState.localStorage,
//   },
//   getters: {
//     getFavoritos(state: { favoritos: Video[] }) {
//       return state.favoritos
//     }
//   },
//   actions: {
//     adicionarFavorito(video: Video) {
//       if (!this.favoritos.some((v: Video) => v.id === video.id)) {
//         this.favoritos.push(video);
//       }
//     },
//     deletarFavorito(id: number) {
//       this.favoritos = this.favoritos.filter((v: Video) => v.id !== id);
//     },
//   },
// })


// FORMA NOVA DE UTILIZAR ESTADOS REATIVOS
export const useVideoStore = defineStore(
  'favoritos', 
  () => {
  // states
  const favoritos = ref<Video[]>([]);

  // actions
  const adicionarFavorito = (video: Video) => {
    if (!favoritos.value.some((v: Video) => v.id === video.id)) {
      favoritos.value.push(video);
    }
  }
  const deletarFavorito = (id: number)=> {
    const favoritosFiltardos = favoritos.value.filter((v: Video) => v.id !== id);
    favoritos.value = favoritosFiltardos;
  }

  return {favoritos, adicionarFavorito, deletarFavorito}
}, 
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
);