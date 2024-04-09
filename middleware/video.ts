export default defineNuxtRouteMiddleware(async (to) => {
  // Pego o id no parâmetro da rota
  const idParametro = +to.params.id;
  // Verifico se o id é um número
  // Se é um número e maior que zero, redireciono para rota "/video"
  if (isNaN(Number(idParametro)) || (Number(idParametro)) < 0) {
    return navigateTo("/videos");
  }
});