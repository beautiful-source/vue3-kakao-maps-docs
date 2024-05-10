import { useKakao } from 'vue3-kakao-maps';

useKakao(import.meta.env.VITE_KAKAO_APP_KEY, ['clusterer', 'services']);

export default defineNuxtPlugin(() => {});
