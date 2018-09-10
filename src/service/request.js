function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseContentType(response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  return response.json();
}

export const requestFetch = request => {
  return fetch(request)
    .then(checkStatus)
    .then(parseContentType)
    .catch(error => {
      console.log(
        'There has been a problem with your fetch operation: ',
        error.message
      );
    });
};
