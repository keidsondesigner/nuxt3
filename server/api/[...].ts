import * as videoController from "../controller/video";

const router = createRouter();

router.get('/videos', defineEventHandler(videoController.buscaVideos));

router.get('/videos/:id', defineEventHandler(videoController.buscaVideoPorId));

router.get('/videos/busca', defineEventHandler(videoController.buscaVideosPorDescricao));

router.post('/videos', defineEventHandler(videoController.adicionaVideo));

router.put('/videos/:id', defineEventHandler(videoController.atualizaVideo));

router.delete('/videos/:id', defineEventHandler(videoController.deletarVideo));

export default useBase("/api/v1", router.handler);