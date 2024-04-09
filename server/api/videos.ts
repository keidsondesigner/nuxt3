import { Video } from "@/interfaces/video.interface"

export default defineEventHandler(() => {

  const videos: Video[] = [
    {
      id: 1,
      descricao: "06 - Middleware - Nuxt 3",
      url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
      data_postagem: "2023-10-15"
    },
    {
      id: 2,
      descricao: "07 - Composables - Nuxt 3",
      url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
      data_postagem: "2023-10-20"
    },
    {
      id: 3,
      descricao: "08 - UseState & Pinia - Nuxt 3",
      url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
      data_postagem: "2023-10-25"
    },
    {
      id: 4,
      descricao: "12 - Server (Backend) - Nuxt 3",
      url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
      data_postagem: "2023-10-30"
    },
    {
      id: 5,
      descricao: "12 - Server (Backend) - Nuxt 3",
      url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
      data_postagem: "2023-10-30"
    },
    {
      id: 6,
      descricao: "12 - Server (Backend) - Nuxt 3",
      url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
      data_postagem: "2023-10-30"
    }
  ]


  return {
    videos: videos,
  }
})