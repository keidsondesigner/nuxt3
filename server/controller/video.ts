import { Video } from "@/interfaces/video.interface"
import { postgresClient } from "../utils"
import { H3Event } from "h3";


const { client } = postgresClient();

export const buscaVideos = async () => {
  const resultado = await client.query('SELECT * FROM videos')
  
  return resultado.rows as Video[];  
}

export const buscaVideoPorId = async (event: H3Event) => {
  const resquestId = (await event.context.params?.id) as string
  const resultado = await client.query(
    "SELECT * FROM videos WHERE id = $1", [resquestId]
  );
  
  return resultado.rows[0] as Video;  
}