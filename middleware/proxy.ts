export default defineEventHandler((event) => {
  if (!event.node.req.url?.startsWith('/download/web/data')) return;

  const target = new URL(event.node.req.url, 'https://apis.map.kakao.com/');

  return proxyRequest(event, target.toString(), {
    headers: {
      host: target.host,
      origin: target.origin
    }
  });
});
