const onmessage = message => {
  const data = message.data;
  data.msg = 'hi from worker.js';
  postMessage(data);
};
