export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/docs" || to.path === "/docs/") {
    return navigateTo("/docs/get-started/installation");
  }
});
