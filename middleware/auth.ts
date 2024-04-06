const logado = true;

export default defineNuxtRouteMiddleware(async (to) => {
  if(to.path !== "/login" && !logado) {
    return navigateTo("/login");
  }
});