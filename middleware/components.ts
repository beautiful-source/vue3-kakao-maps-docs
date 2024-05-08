export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/components" || to.path === "/components/") {
    return navigateTo("/components/kakaoMap");
  }
});
