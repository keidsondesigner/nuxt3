import * as videoController from "../controller/video";

const router = createRouter();

router.get('/videos', defineEventHandler(videoController.buscaVideos));
router.get('/videos/:id', defineEventHandler(videoController.buscaVideoPorId));

router.post('/videos', defineEventHandler(videoController.adicionaVideo));

export default useBase("/api/v1", router.handler);