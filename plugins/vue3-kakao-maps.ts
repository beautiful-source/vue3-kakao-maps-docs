import { useKakao } from "vue3-kakao-maps";

useKakao(import.meta.env.VITE_KAKAO_APP_KEY);

export default defineNuxtPlugin(() => {});
