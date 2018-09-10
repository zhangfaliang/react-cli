import { post, get } from './distributeAPI';
export const testPost = data => {
  return post({
    protocol: '120121',
    clientInfo: { product: '51', channel: '2001' }
  });
};
