import { Video } from "@/interfaces/video.interface"
import { postgresClient } from "../utils"

const { client } = postgresClient();

export const buscaVideos = async () => {
  const resultado = await client.query('SELECT * FROM videos')
  
  return resultado.rows as Video[];  
}