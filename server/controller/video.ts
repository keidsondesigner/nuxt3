import { Video } from "@/interfaces/video.interface"
import { postgresClient } from "../utils"
import { H3Event, createError } from "h3";


const { client } = postgresClient();

// GET
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

// POST
export const adicionaVideo = async (event: H3Event) => {
  try {
    const body = await readBody(event)

    await client.query(
      'INSERT INTO videos (descricao, url, data_postagem) VALUES ($1, $2, CURRENT_DATE)',
      [body.descricao, body.url]
    );
    return "Vídeo adicionado com sucesso!"
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: 'Erro ao adicionar o video',
    })
  }
}

// PUT

export const atualizaVideo = async (event: H3Event) => {
  try {
    const body = await readBody(event)

    const resquestId = (await event.context.params?.id) as string
    await client.query(
      "UPDATE videos SET descricao = $1, url = $2, data_postagem = CURRENT_DATE WHERE id = $3",
      [body.descricao, body.url, resquestId]
    );
    return "Vídeo atualizado com sucesso!"
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: 'Erro ao atualizar o video',
    })
  }
}
